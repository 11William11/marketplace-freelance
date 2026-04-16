export declare class ProyectoEntity {
    id: number;
    solicitudId: number;
    estado: 'PENDIENTE' | 'EN_PROGRESO' | 'EN_REVISION' | 'COMPLETADO' | 'CANCELADO';
    fechaInicio?: Date;
    fechaFin?: Date;
    createdAt: Date;
    updatedAt: Date;
}
