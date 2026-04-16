export declare enum EstadoSolicitudDto {
    PENDIENTE = "PENDIENTE",
    ACEPTADA = "ACEPTADA",
    RECHAZADA = "RECHAZADA"
}
export declare class UpdateSolicitudDto {
    estado: EstadoSolicitudDto;
}
