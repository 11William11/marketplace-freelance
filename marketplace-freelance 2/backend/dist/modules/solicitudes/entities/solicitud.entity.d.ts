export declare class SolicitudEntity {
    id: number;
    clienteId: number;
    servicioId: number;
    mensaje: string;
    estado: 'PENDIENTE' | 'ACEPTADA' | 'RECHAZADA';
    createdAt: Date;
    updatedAt: Date;
}
