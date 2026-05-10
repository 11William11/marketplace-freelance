'use client';

import { useEffect, useState } from 'react';
import { proyectosService } from '@/services/proyectos.service';
import type { Proyecto, EstadoProyecto } from '@/interfaces/proyecto.interface';

const ESTADOS: EstadoProyecto[] = ['PENDIENTE', 'EN_PROGRESO', 'EN_REVISION', 'COMPLETADO', 'CANCELADO'];

const ESTADO_BADGE: Record<EstadoProyecto, string> = {
  PENDIENTE:    'bg-gray-100 text-gray-600',
  EN_PROGRESO:  'bg-blue-50 text-blue-700',
  EN_REVISION:  'bg-yellow-50 text-yellow-700',
  COMPLETADO:   'bg-green-50 text-green-700',
  CANCELADO:    'bg-red-50 text-red-600',
};

const ESTADO_LABEL: Record<EstadoProyecto, string> = {
  PENDIENTE:    '⏳ Pendiente',
  EN_PROGRESO:  '🔨 En Progreso',
  EN_REVISION:  '🔍 En Revisión',
  COMPLETADO:   '✅ Completado',
  CANCELADO:    '❌ Cancelado',
};

export default function ProyectosPage() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const load = async () => {
    try { setLoading(true); setProyectos(await proyectosService.findAll()); }
    catch { setError('Error al cargar proyectos'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleEstado = async (id: number, estado: EstadoProyecto) => {
    setUpdatingId(id); setError('');
    try { await proyectosService.updateEstado(id, estado); load(); }
    catch (err: any) { setError(err.message || 'Error al actualizar estado'); }
    finally { setUpdatingId(null); }
  };

  const siguienteEstado = (actual: EstadoProyecto): EstadoProyecto | null => {
    const flujo: Partial<Record<EstadoProyecto, EstadoProyecto>> = {
      PENDIENTE: 'EN_PROGRESO',
      EN_PROGRESO: 'EN_REVISION',
      EN_REVISION: 'COMPLETADO',
    };
    return flujo[actual] ?? null;
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Proyectos</h1>
        <p className="text-sm text-gray-500">CU-07 — Actualizar estado: Pendiente → En Progreso → En Revisión → Completado</p>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

      {loading ? <p className="text-gray-500 text-sm">Cargando...</p> : (
        <>
          {/* Resumen por estado */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {ESTADOS.map(est => {
              const count = proyectos.filter(p => p.estado === est).length;
              return (
                <div key={est} className={`rounded-xl p-3 text-center border ${ESTADO_BADGE[est]} border-current border-opacity-20`}>
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-xs mt-0.5">{ESTADO_LABEL[est]}</div>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            {proyectos.map(p => {
              const siguiente = siguienteEstado(p.estado);
              const servicio = p.solicitud.servicio;
              const cliente = p.solicitud.cliente;
              return (
                <div key={p.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-gray-400">PROYECTO #{p.id}</span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${ESTADO_BADGE[p.estado]}`}>
                          {ESTADO_LABEL[p.estado]}
                        </span>
                        <span className="text-xs text-gray-400">Solicitud #{p.solicitudId}</span>
                      </div>

                      <h3 className="font-semibold text-gray-900">{servicio.titulo}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        👤 Cliente: <span className="font-medium">{cliente.nombres} {cliente.apellidos}</span>
                        {' · '}
                        👨‍💻 Freelancer: <span className="font-medium">{servicio.freelancer.nombres} {servicio.freelancer.apellidos}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        🏷️ {servicio.categoriaServicio.nombre}
                        {' · '}
                        💰 ${servicio.precio.toLocaleString()}
                        {' · '}
                        📅 {servicio.tiempoEntregaDias} días
                      </p>

                      {(p.fechaInicio || p.fechaFin) && (
                        <p className="text-xs text-gray-400 mt-1">
                          {p.fechaInicio && <>Inicio: {new Date(p.fechaInicio).toLocaleDateString('es-CO')}</>}
                          {p.fechaFin && <> · Fin: {new Date(p.fechaFin).toLocaleDateString('es-CO')}</>}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 ml-4 shrink-0">
                      {siguiente && (
                        <button
                          onClick={() => handleEstado(p.id, siguiente)}
                          disabled={updatingId === p.id}
                          className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                        >
                          {updatingId === p.id ? 'Guardando…' : `→ ${ESTADO_LABEL[siguiente]}`}
                        </button>
                      )}
                      {(p.estado === 'PENDIENTE' || p.estado === 'EN_PROGRESO' || p.estado === 'EN_REVISION') && (
                        <button
                          onClick={() => handleEstado(p.id, 'CANCELADO')}
                          disabled={updatingId === p.id}
                          className="text-red-500 text-xs hover:underline text-center"
                        >
                          Cancelar proyecto
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {proyectos.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400 text-sm">
                No hay proyectos aún. Acepta una solicitud para crear el primer proyecto.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
