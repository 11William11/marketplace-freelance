'use client';

import { useEffect, useState } from 'react';
import { serviciosService } from '@/services/servicios.service';
import { freelancersService } from '@/services/freelancers.service';
import { categoriasService } from '@/services/categorias.service';
import type { Servicio } from '@/interfaces/servicio.interface';
import type { Freelancer } from '@/interfaces/freelancer.interface';
import type { CategoriaServicio } from '@/interfaces/categoria-servicio.interface';

const INIT = { titulo: '', descripcion: '', precio: '', tiempoEntregaDias: '', freelancerId: '', categoriaServicioId: '', activo: true };

export default function ServiciosPage() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [categorias, setCategorias] = useState<CategoriaServicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(INIT);
  const [error, setError] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      const [s, fl, cat] = await Promise.all([
        serviciosService.findAll(),
        freelancersService.findAll(),
        categoriasService.findAll(),
      ]);
      setServicios(s); setFreelancers(fl); setCategorias(cat);
    } catch { setError('Error al cargar datos'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const resetForm = () => { setForm(INIT); setEditingId(null); setShowForm(false); setError(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try {
      const data = {
        titulo: form.titulo,
        descripcion: form.descripcion,
        precio: parseFloat(form.precio),
        tiempoEntregaDias: parseInt(form.tiempoEntregaDias),
        freelancerId: parseInt(form.freelancerId),
        categoriaServicioId: parseInt(form.categoriaServicioId),
        activo: form.activo,
      };
      if (editingId) await serviciosService.update(editingId, data);
      else await serviciosService.create(data);
      resetForm(); load();
    } catch (err: any) { setError(err.message || 'Error al guardar'); }
  };

  const handleEdit = (s: Servicio) => {
    setForm({
      titulo: s.titulo, descripcion: s.descripcion,
      precio: String(s.precio), tiempoEntregaDias: String(s.tiempoEntregaDias),
      freelancerId: String(s.freelancerId), categoriaServicioId: String(s.categoriaServicioId),
      activo: s.activo,
    });
    setEditingId(s.id); setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este servicio?')) return;
    try { await serviciosService.remove(id); load(); }
    catch (err: any) { setError(err.message || 'Error al eliminar'); }
  };

  const inputCls = "border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Servicios</h1>
          <p className="text-sm text-gray-500">CU-02 — Publicar servicio · CU-04 — Búsqueda de servicios</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium">
          + Publicar Servicio
        </button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-6 grid grid-cols-2 gap-4">
          <input required placeholder="Título del servicio" value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })} className={inputCls} />
          <input required type="number" min="0" step="0.01" placeholder="Precio (USD)" value={form.precio} onChange={e => setForm({ ...form, precio: e.target.value })} className={inputCls} />
          <textarea required placeholder="Descripción detallada del servicio" value={form.descripcion} onChange={e => setForm({ ...form, descripcion: e.target.value })} rows={3} className={`col-span-2 ${inputCls} resize-none`} />
          <input required type="number" min="1" placeholder="Tiempo de entrega (días)" value={form.tiempoEntregaDias} onChange={e => setForm({ ...form, tiempoEntregaDias: e.target.value })} className={inputCls} />
          <select required value={form.freelancerId} onChange={e => setForm({ ...form, freelancerId: e.target.value })} className={inputCls}>
            <option value="">— Seleccionar Freelancer —</option>
            {freelancers.map(fl => <option key={fl.id} value={fl.id}>{fl.nombres} {fl.apellidos}</option>)}
          </select>
          <select required value={form.categoriaServicioId} onChange={e => setForm({ ...form, categoriaServicioId: e.target.value })} className={inputCls}>
            <option value="">— Seleccionar Categoría —</option>
            {categorias.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
          </select>
          <label className="flex items-center gap-2 text-sm text-gray-700 col-span-2">
            <input type="checkbox" checked={form.activo} onChange={e => setForm({ ...form, activo: e.target.checked })} className="w-4 h-4" />
            Servicio activo (visible para clientes)
          </label>
          <div className="col-span-2 flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">{editingId ? 'Actualizar' : 'Publicar'}</button>
            <button type="button" onClick={resetForm} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">Cancelar</button>
          </div>
        </form>
      )}

      {loading ? <p className="text-gray-500 text-sm">Cargando...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {servicios.map(s => (
            <div key={s.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                  {s.categoriaServicio.nombre}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.activo ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {s.activo ? 'Activo' : 'Inactivo'}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mt-1">{s.titulo}</h3>
              <p className="text-sm text-gray-500 mt-1 flex-1">{s.descripcion}</p>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center text-sm">
                <div>
                  <span className="font-bold text-indigo-700">${s.precio.toLocaleString()}</span>
                  <span className="text-gray-400 ml-1">· {s.tiempoEntregaDias}d</span>
                </div>
                <span className="text-gray-500 text-xs">{s.freelancer.nombres} {s.freelancer.apellidos}</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button onClick={() => handleEdit(s)} className="text-indigo-600 text-sm hover:underline">Editar</button>
                <button onClick={() => handleDelete(s.id)} className="text-red-500 text-sm hover:underline">Eliminar</button>
              </div>
            </div>
          ))}
          {servicios.length === 0 && (
            <div className="col-span-3 bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400 text-sm">No hay servicios publicados</div>
          )}
        </div>
      )}
    </div>
  );
}
