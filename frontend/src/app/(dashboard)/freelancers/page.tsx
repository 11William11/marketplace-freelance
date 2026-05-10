'use client';

import { useEffect, useState } from 'react';
import { freelancersService } from '@/services/freelancers.service';
import { habilidadesService } from '@/services/habilidades.service';
import type { Freelancer } from '@/interfaces/freelancer.interface';

const FORM_INIT = {
  nombres: '', apellidos: '', documentoIdentidad: '',
  correoElectronico: '', telefono: '', descripcionPerfil: '', portfolioUrl: '',
};

export default function FreelancersPage() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(FORM_INIT);
  const [error, setError] = useState('');
  // Para agregar habilidad en línea
  const [habilidadInput, setHabilidadInput] = useState('');
  const [habilidadFreelancerId, setHabilidadFreelancerId] = useState<number | null>(null);

  const load = async () => {
    try { setLoading(true); setFreelancers(await freelancersService.findAll()); }
    catch { setError('Error al cargar freelancers'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const resetForm = () => { setForm(FORM_INIT); setEditingId(null); setShowForm(false); setError(''); };

  const f = (k: keyof typeof FORM_INIT) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try {
      const data = {
        ...form,
        telefono: form.telefono || undefined,
        portfolioUrl: form.portfolioUrl || undefined,
      };
      if (editingId) await freelancersService.update(editingId, data);
      else await freelancersService.create(data as any);
      resetForm(); load();
    } catch (err: any) { setError(err.message || 'Error al guardar'); }
  };

  const handleEdit = (fl: Freelancer) => {
    setForm({
      nombres: fl.nombres, apellidos: fl.apellidos,
      documentoIdentidad: fl.documentoIdentidad, correoElectronico: fl.correoElectronico,
      telefono: fl.telefono || '', descripcionPerfil: fl.descripcionPerfil,
      portfolioUrl: fl.portfolioUrl || '',
    });
    setEditingId(fl.id); setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este freelancer?')) return;
    try { await freelancersService.remove(id); load(); }
    catch (err: any) { setError(err.message || 'Error al eliminar'); }
  };

  const handleAddHabilidad = async (freelancerId: number) => {
    if (!habilidadInput.trim()) return;
    try {
      await habilidadesService.create({ nombre: habilidadInput.trim(), freelancerId });
      setHabilidadInput(''); setHabilidadFreelancerId(null); load();
    } catch (err: any) { setError(err.message || 'Error al agregar habilidad'); }
  };

  const handleDeleteHabilidad = async (id: number) => {
    try { await habilidadesService.remove(id); load(); }
    catch (err: any) { setError(err.message || 'Error al eliminar habilidad'); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Freelancers</h1>
          <p className="text-sm text-gray-500">CU-01 — Registro de freelancers con perfil y habilidades</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium">
          + Nuevo Freelancer
        </button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-6 grid grid-cols-2 gap-4">
          <input required placeholder="Nombres" value={form.nombres} onChange={f('nombres')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input required placeholder="Apellidos" value={form.apellidos} onChange={f('apellidos')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input required placeholder="Documento de Identidad" value={form.documentoIdentidad} onChange={f('documentoIdentidad')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input required type="email" placeholder="Correo Electrónico" value={form.correoElectronico} onChange={f('correoElectronico')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input placeholder="Teléfono (opcional)" value={form.telefono} onChange={f('telefono')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input placeholder="URL Portafolio (opcional)" value={form.portfolioUrl} onChange={f('portfolioUrl')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea required placeholder="Descripción del perfil profesional" value={form.descripcionPerfil} onChange={f('descripcionPerfil')} rows={3} className="col-span-2 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" />
          <div className="col-span-2 flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">{editingId ? 'Actualizar' : 'Crear'}</button>
            <button type="button" onClick={resetForm} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">Cancelar</button>
          </div>
        </form>
      )}

      {loading ? <p className="text-gray-500 text-sm">Cargando...</p> : (
        <div className="space-y-4">
          {freelancers.map(fl => (
            <div key={fl.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{fl.nombres} {fl.apellidos}</h3>
                  <p className="text-sm text-gray-500">{fl.correoElectronico} · {fl.documentoIdentidad}</p>
                  <p className="text-sm text-gray-600 mt-1">{fl.descripcionPerfil}</p>
                  {fl.portfolioUrl && (
                    <a href={fl.portfolioUrl} target="_blank" rel="noreferrer" className="text-xs text-indigo-600 hover:underline">{fl.portfolioUrl}</a>
                  )}
                  {/* Habilidades */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {fl.habilidades.map(h => (
                      <span key={h.id} className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full">
                        {h.nombre}
                        <button onClick={() => handleDeleteHabilidad(h.id)} className="text-indigo-400 hover:text-red-500 font-bold">×</button>
                      </span>
                    ))}
                  </div>
                  {/* Agregar habilidad */}
                  {habilidadFreelancerId === fl.id ? (
                    <div className="flex gap-2 mt-2">
                      <input
                        autoFocus
                        value={habilidadInput}
                        onChange={e => setHabilidadInput(e.target.value)}
                        placeholder="Ej: React, Figma…"
                        className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddHabilidad(fl.id); } }}
                      />
                      <button onClick={() => handleAddHabilidad(fl.id)} className="bg-indigo-600 text-white px-2 py-1 rounded text-xs hover:bg-indigo-700">Agregar</button>
                      <button onClick={() => { setHabilidadFreelancerId(null); setHabilidadInput(''); }} className="text-gray-500 text-xs hover:underline">Cancelar</button>
                    </div>
                  ) : (
                    <button onClick={() => { setHabilidadFreelancerId(fl.id); setHabilidadInput(''); }} className="text-xs text-indigo-600 hover:underline mt-2 block">+ Agregar habilidad</button>
                  )}
                </div>
                <div className="flex gap-3 ml-4 shrink-0">
                  <button onClick={() => handleEdit(fl)} className="text-indigo-600 text-sm hover:underline">Editar</button>
                  <button onClick={() => handleDelete(fl.id)} className="text-red-500 text-sm hover:underline">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          {freelancers.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400 text-sm">No hay freelancers registrados</div>
          )}
        </div>
      )}
    </div>
  );
}
