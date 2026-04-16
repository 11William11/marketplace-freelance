export declare enum EstadoProyectoDto {
    PENDIENTE = "PENDIENTE",
    EN_PROGRESO = "EN_PROGRESO",
    EN_REVISION = "EN_REVISION",
    COMPLETADO = "COMPLETADO",
    CANCELADO = "CANCELADO"
}
export declare class UpdateProyectoDto {
    estado: EstadoProyectoDto;
    fechaInicio?: string;
    fechaFin?: string;
}
