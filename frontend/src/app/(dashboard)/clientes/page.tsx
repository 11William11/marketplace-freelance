'use client';

import { useEffect, useState } from 'react';
import { clientesService } from '@/services/clientes.service';
import type { Cliente } from '@/interfaces/cliente.interface';

const INIT = { nombres: '', apellidos: '', documentoIdentidad: '', correoElectronico: '', telefono: '', empresa: '' };

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(INIT);
  const [error, setError] = useState('');

  const load = async () => {
    try { setLoading(true); setClientes(await clientesService.findAll()); }
    catch { setError('Error al cargar clientes'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const resetForm = () => { setForm(INIT); setEditingId(null); setShowForm(false); setError(''); };

  const f = (k: keyof typeof INIT) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try {
      const data = { ...form, telefono: form.telefono || undefined, empresa: form.empresa || undefined };
      if (editingId) await clientesService.update(editingId, data);
      else await clientesService.create(data as any);
      resetForm(); load();
    } catch (err: any) { setError(err.message || 'Error al guardar'); }
  };

  const handleEdit = (c: Cliente) => {
    setForm({ nombres: c.nombres, apellidos: c.apellidos, documentoIdentidad: c.documentoIdentidad, correoElectronico: c.correoElectronico, telefono: c.telefono || '', empresa: c.empresa || '' });
    setEditingId(c.id); setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este cliente?')) return;
    try { await clientesService.remove(id); load(); }
    catch (err: any) { setError(err.message || 'Error al eliminar'); }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
          <p className="text-sm text-gray-500">CU-03 — Registro de clientes con datos de contacto y empresa</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium">
          + Nuevo Cliente
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
          <input placeholder="Empresa (opcional)" value={form.empresa} onChange={f('empresa')} className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <div className="col-span-2 flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">{editingId ? 'Actualizar' : 'Crear'}</button>
            <button type="button" onClick={resetForm} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">Cancelar</button>
          </div>
        </form>
      )}

      {loading ? <p className="text-gray-500 text-sm">Cargando...</p> : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['ID', 'Nombres', 'Apellidos', 'Documento', 'Correo', 'Teléfono', 'Empresa', 'Acciones'].map(h => (
                  <th key={h} className="text-left p-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clientes.map(c => (
                <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-500">{c.id}</td>
                  <td className="p-3 text-sm font-medium">{c.nombres}</td>
                  <td className="p-3 text-sm">{c.apellidos}</td>
                  <td className="p-3 text-sm">{c.documentoIdentidad}</td>
                  <td className="p-3 text-sm">{c.correoElectronico}</td>
                  <td className="p-3 text-sm">{c.telefono || '—'}</td>
                  <td className="p-3 text-sm">{c.empresa || '—'}</td>
                  <td className="p-3 flex gap-3">
                    <button onClick={() => handleEdit(c)} className="text-indigo-600 text-sm hover:underline">Editar</button>
                    <button onClick={() => handleDelete(c.id)} className="text-red-500 text-sm hover:underline">Eliminar</button>
                  </td>
                </tr>
              ))}
              {clientes.length === 0 && (
                <tr><td colSpan={8} className="p-6 text-center text-gray-400 text-sm">No hay clientes registrados</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
