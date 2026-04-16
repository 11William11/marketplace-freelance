import { PrismaService } from '../../../prisma/prisma.service';
import { CreateHabilidadDto } from '../dto/create-habilidad.dto';
import { UpdateHabilidadDto } from '../dto/update-habilidad.dto';
export declare class HabilidadesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    })[]>;
    findByFreelancer(freelancerId: number): import(".prisma/client").Prisma.PrismaPromise<{
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HabilidadClient<{
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
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: CreateHabilidadDto): import(".prisma/client").Prisma.Prisma__HabilidadClient<{
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
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateHabilidadDto): import(".prisma/client").Prisma.Prisma__HabilidadClient<{
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
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HabilidadClient<{
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
