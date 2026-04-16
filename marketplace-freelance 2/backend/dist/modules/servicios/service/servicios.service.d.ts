import { ServiciosRepository } from '../repository/servicios.repository';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
export declare class ServiciosService {
    private readonly serviciosRepository;
    constructor(serviciosRepository: ServiciosRepository);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        categoriaServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        freelancer: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombres: string;
            apellidos: string;
            documentoIdentidad: string;
            correoElectronico: string;
            telefono: string | null;
            descripcionPerfil: string;
            portfolioUrl: string | null;
        };
    } & {
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    })[]>;
    findByCategoria(categoriaId: number): import(".prisma/client").Prisma.PrismaPromise<({
        categoriaServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        freelancer: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombres: string;
            apellidos: string;
            documentoIdentidad: string;
            correoElectronico: string;
            telefono: string | null;
            descripcionPerfil: string;
            portfolioUrl: string | null;
        };
    } & {
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    })[]>;
    findByFreelancer(freelancerId: number): import(".prisma/client").Prisma.PrismaPromise<({
        categoriaServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        freelancer: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombres: string;
            apellidos: string;
            documentoIdentidad: string;
            correoElectronico: string;
            telefono: string | null;
            descripcionPerfil: string;
            portfolioUrl: string | null;
        };
    } & {
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    })[]>;
    findOne(id: number): Promise<{
        categoriaServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        freelancer: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombres: string;
            apellidos: string;
            documentoIdentidad: string;
            correoElectronico: string;
            telefono: string | null;
            descripcionPerfil: string;
            portfolioUrl: string | null;
        };
    } & {
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    }>;
    create(dto: CreateServicioDto): Promise<{
        categoriaServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        freelancer: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombres: string;
            apellidos: string;
            documentoIdentidad: string;
            correoElectronico: string;
            telefono: string | null;
            descripcionPerfil: string;
            portfolioUrl: string | null;
        };
    } & {
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    }>;
    update(id: number, dto: UpdateServicioDto): Promise<{
        categoriaServicio: {
            nombre: string;
            descripcion: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        freelancer: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombres: string;
            apellidos: string;
            documentoIdentidad: string;
            correoElectronico: string;
            telefono: string | null;
            descripcionPerfil: string;
            portfolioUrl: string | null;
        };
    } & {
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    }>;
    remove(id: number): Promise<{
        descripcion: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
        titulo: string;
        precio: number;
        tiempoEntregaDias: number;
        activo: boolean;
        categoriaServicioId: number;
    }>;
}
