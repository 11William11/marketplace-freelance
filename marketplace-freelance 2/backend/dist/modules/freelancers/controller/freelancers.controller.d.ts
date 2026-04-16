import { FreelancersService } from '../service/freelancers.service';
import { CreateFreelancerDto } from '../dto/create-freelancer.dto';
import { UpdateFreelancerDto } from '../dto/update-freelancer.dto';
export declare class FreelancersController {
    private readonly freelancersService;
    constructor(freelancersService: FreelancersService);
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
    findOne(id: number): Promise<{
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
    }>;
    create(createFreelancerDto: CreateFreelancerDto): Promise<{
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
    }>;
    update(id: number, updateFreelancerDto: UpdateFreelancerDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
