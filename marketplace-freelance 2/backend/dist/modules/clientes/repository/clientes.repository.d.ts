import { PrismaService } from '../../../prisma/prisma.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
export declare class ClientesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ClienteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: CreateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ClienteClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        documentoIdentidad: string;
        correoElectronico: string;
        telefono: string | null;
        empresa: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
