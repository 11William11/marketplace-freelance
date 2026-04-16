import { ClientesService } from '../service/clientes.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }>;
    create(dto: CreateClienteDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }>;
    update(id: number, dto: UpdateClienteDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
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
        empresa: string | null;
    }>;
}
