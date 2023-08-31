import { Injectable } from '@nestjs/common';
import { PrismaClient, Emprego } from '@prisma/client';
import { CriaEmpregoDto } from './dto/criaEmprego.dto';


@Injectable()
export class EmpregoRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Emprego[]> {
      return this.prisma.$queryRaw`SELECT * FROM "Emprego"`;
    }

    async findById(id: number): Promise<Emprego> {
      return this.prisma.$queryRaw`SELECT * FROM "Emprego" WHERE "id" = ${id}`;
    }

    async create(emprego: CriaEmpregoDto): Promise<Emprego> {
      const { descricao, salario } = emprego;
      const result = await this.prisma.$executeRaw`INSERT INTO "Emprego" ("descricao", "salario") VALUES (${descricao}, ${salario}) RETURNING *`;
      return result[0];

    } 

}