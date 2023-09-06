import { Injectable } from '@nestjs/common';
import { PrismaClient, Usuario } from '@prisma/client';
import { CriaUsuarioDto } from './dto/criaUsuario.dto';


@Injectable()
export class UsuarioRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll(): Promise<Usuario[]> {
      return this.prisma.$queryRaw`SELECT * FROM "Usuario"`;
    }

    async findById(id: number): Promise<Usuario> {
      return this.prisma.$queryRaw`SELECT * FROM "Usuario" WHERE "id" = ${id}`;
    }    

    async create(usuario: CriaUsuarioDto): Promise<Usuario> {
      const { email, senha, nome, disponivel, idade } = usuario;
      const result = await this.prisma.$executeRaw`INSERT INTO "Usuario" ("email", "senha", "nome", "disponivel", "idade") VALUES (${email}, ${senha}, ${nome}, ${disponivel}, ${idade}) RETURNING *`;
      return result[0];

    } 

}