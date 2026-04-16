'use client';

import { useEffect, useState } from 'react';
import { solicitudesService } from '@/services/solicitudes.service';
import { clientesService } from '@/services/clientes.service';
import { serviciosService } from '@/services/servicios.service';
import type { Solicitud, EstadoSolicitud } from '@/interfaces/solicitud.interface';
import type { Cliente } from '@/interfaces/cliente.interface';
import type { Servicio } from '@/interfaces/servicio.interface';

const ESTADO_BADGE: Record<EstadoSolicitud, string> = {
  PENDIENTE: 'bg-yellow-50 text-yellow-700',
  ACEPTADA:  'bg-green-50 text-green-700',
  RECHAZADA: 'bg-red-50 text-red-600',
};

export default function SolicitudesPage() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ clienteId: '', servicioId: '', mensaje: '' });
  const [error, setError] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      const [sol, cl, ser] = await Promise.all([
        solicitudesService.findAll(),
        clientesService.findAll(),
        serviciosService.findAll(),
      ]);
      setSolicitudes(sol); setClientes(cl); setServicios(ser);
    } catch { setError('Error al cargar datos'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const resetForm = () => { setForm({ clienteId: '', servicioId: '', mensaje: '' }); setShowForm(false); setError(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try {
      await solicitudesService.create({
        clienteId: parseInt(form.clienteId),
        servicioId: parseInt(form.servicioId),
        mensaje: form.mensaje,
      });
      resetForm(); load();
    } catch (err: any) { setError(err.message || 'Error al crear solicitud'); }
  };

  const handleEstado = async (id: number, estado: EstadoSolicitud) => {
    const accion = estado === 'ACEPTADA' ? 'aceptar' : 'rechazar';
    if (!confirm(`¿Deseas ${accion} esta solicitud?${estado === 'ACEPTADA' ? ' Se creará un proyecto automáticamente.' : ''}`)) return;
    try { await solicitudesService.updateEstado(id, estado); load(); }
    catch (err: any) { setError(err.message || `Error al ${accion}`); }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar esta solicitud?')) return;
    try { await solicitudesService.remove(id); load(); }
    catch (err: any) { setError(err.message || 'Error al eliminar'); }
  };

  const inputCls = "border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Solicitudes</h1>
          <p className="text-sm text-gray-500">CU-05 — Crear solicitud · CU-06 — Aceptar o rechazar</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium">
          + Nueva Solicitud
        </button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-6 grid grid-cols-2 gap-4">
          <select required value={form.clienteId} onChange={e => setForm({ ...form, clienteId: e.target.value })} className={inputCls}>
            <option value="">— Seleccionar Cliente —</option>
            {clientes.map(c => <option key={c.id} value={c.id}>{c.nombres} {c.apellidos}</option>)}
          </select>
          <select required value={form.servicioId} onChange={e => setForm({ ...form, servicioId: e.target.value })} className={inputCls}>
            <option value="">— Seleccionar Servicio —</option>
            {servicios.filter(s => s.activo).map(s => (
              <option key={s.id} value={s.id}>{s.titulo} — {s.freelancer.nombres} (${s.precio})</option>
            ))}
          </select>
          <textarea required placeholder="Mensaje para el freelancer…" value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} rows={3} className={`col-span-2 ${inputCls} resize-none`} />
          <div className="col-span-2 flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">Enviar Solicitud</button>
            <button type="button" onClick={resetForm} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">Cancelar</button>
          </div>
        </form>
      )}

      {loading ? <p className="text-gray-500 text-sm">Cargando...</p> : (
        <div className="space-y-3">
          {solicitudes.map(sol => (
            <div key={sol.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${ESTADO_BADGE[sol.estado]}`}>
                      {sol.estado}
                    </span>
                    <span className="text-xs text-gray-400">#{sol.id} · {new Date(sol.createdAt).toLocaleDateString('es-CO')}</span>
                    {sol.proyecto && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                        Proyecto #{sol.proyecto.id}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-indigo-700">{sol.cliente.nombres} {sol.cliente.apellidos}</span>
                    {' → '}
                    <span className="text-gray-700">{sol.servicio.titulo}</span>
                    <span className="text-gray-400 font-normal"> ({sol.servicio.freelancer.nombres} {sol.servicio.freelancer.apellidos})</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1 italic">"{sol.mensaje}"</p>
                </div>
                <div className="flex flex-col gap-2 ml-4 shrink-0">
                  {sol.estado === 'PENDIENTE' && (
                    <>
                      <button onClick={() => handleEstado(sol.id, 'ACEPTADA')} className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-green-700">✓ Aceptar</button>
                      <button onClick={() => handleEstado(sol.id, 'RECHAZADA')} className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-red-600">✕ Rechazar</button>
                    </>
                  )}
                  <button onClick={() => handleDelete(sol.id)} className="text-gray-400 text-xs hover:text-red-500 text-center">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          {solicitudes.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400 text-sm">No hay solicitudes registradas</div>
          )}
        </div>
      )}
    </div>
  );
}
