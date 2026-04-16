import { PrismaService } from '../../../prisma/prisma.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
export declare class ServiciosRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ServicioClient<{
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
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: CreateServicioDto): import(".prisma/client").Prisma.Prisma__ServicioClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateServicioDto): import(".prisma/client").Prisma.Prisma__ServicioClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ServicioClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
