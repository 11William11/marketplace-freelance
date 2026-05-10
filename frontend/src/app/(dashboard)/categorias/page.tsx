'use client';

import { useEffect, useState } from 'react';
import { categoriasService } from '@/services/categorias.service';
import type { CategoriaServicio } from '@/interfaces/categoria-servicio.interface';

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<CategoriaServicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const [error, setError] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      setCategorias(await categoriasService.findAll());
    } catch {
      setError('Error al cargar categorías');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const resetForm = () => {
    setForm({ nombre: '', descripcion: '' });
    setEditingId(null);
    setShowForm(false);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const data = { nombre: form.nombre, descripcion: form.descripcion || undefined };
      if (editingId) await categoriasService.update(editingId, data);
      else await categoriasService.create(data);
      resetForm();
      load();
    } catch (err: any) {
      setError(err.message || 'Error al guardar');
    }
  };

  const handleEdit = (c: CategoriaServicio) => {
    setForm({ nombre: c.nombre, descripcion: c.descripcion || '' });
    setEditingId(c.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar esta categoría?')) return;
    try { await categoriasService.remove(id); load(); }
    catch (err: any) { setError(err.message || 'Error al eliminar'); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categorías de Servicio</h1>
          <p className="text-sm text-gray-500">CU-10 — Gestión de categorías (diseño, desarrollo, marketing…)</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium"
        >
          + Nueva Categoría
        </button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-6 grid grid-cols-2 gap-4">
          <input
            required
            placeholder="Nombre de la categoría"
            value={form.nombre}
            onChange={e => setForm({ ...form, nombre: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            placeholder="Descripción (opcional)"
            value={form.descripcion}
            onChange={e => setForm({ ...form, descripcion: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="col-span-2 flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
              {editingId ? 'Actualizar' : 'Crear'}
            </button>
            <button type="button" onClick={resetForm} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">
              Cancelar
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-gray-500 text-sm">Cargando...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['ID', 'Nombre', 'Descripción', 'Creado', 'Acciones'].map(h => (
                  <th key={h} className="text-left p-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categorias.map(c => (
                <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-500">{c.id}</td>
                  <td className="p-3 text-sm font-medium text-gray-900">{c.nombre}</td>
                  <td className="p-3 text-sm text-gray-600">{c.descripcion || '—'}</td>
                  <td className="p-3 text-sm text-gray-500">{new Date(c.createdAt).toLocaleDateString('es-CO')}</td>
                  <td className="p-3 flex gap-3">
                    <button onClick={() => handleEdit(c)} className="text-indigo-600 text-sm hover:underline">Editar</button>
                    <button onClick={() => handleDelete(c.id)} className="text-red-500 text-sm hover:underline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {categorias.length === 0 && (
                <tr><td colSpan={5} className="p-6 text-center text-gray-400 text-sm">No hay categorías registradas</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
