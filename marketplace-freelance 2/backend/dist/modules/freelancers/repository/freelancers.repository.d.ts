import { PrismaService } from '../../../prisma/prisma.service';
import { CreateFreelancerDto } from '../dto/create-freelancer.dto';
import { UpdateFreelancerDto } from '../dto/update-freelancer.dto';
export declare class FreelancersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        habilidades: {
            nombre: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            freelancerId: number;
        }[];
    } & {
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
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FreelancerClient<{
        servicios: ({
            categoriaServicio: {
                nombre: string;
                descripcion: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
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
        })[];
        habilidades: {
            nombre: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            freelancerId: number;
        }[];
    } & {
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
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: CreateFreelancerDto): import(".prisma/client").Prisma.Prisma__FreelancerClient<{
        habilidades: {
            nombre: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            freelancerId: number;
        }[];
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateFreelancerDto): import(".prisma/client").Prisma.Prisma__FreelancerClient<{
        habilidades: {
            nombre: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            freelancerId: number;
        }[];
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FreelancerClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
