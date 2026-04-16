import { HabilidadesService } from '../service/habilidades.service';
import { CreateHabilidadDto } from '../dto/create-habilidad.dto';
import { UpdateHabilidadDto } from '../dto/update-habilidad.dto';
export declare class HabilidadesController {
    private readonly habilidadesService;
    constructor(habilidadesService: HabilidadesService);
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
    findOne(id: number): Promise<{
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
    }>;
    create(dto: CreateHabilidadDto): Promise<{
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
    }>;
    update(id: number, dto: UpdateHabilidadDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
        nombre: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        freelancerId: number;
    }>;
}
