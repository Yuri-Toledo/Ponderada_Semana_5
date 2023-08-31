import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository'
import { CriaUsuarioDto } from './dto/criaUsuario.dto';
import { Usuario } from '@prisma/client';

@Injectable()
export class UsuarioService {

  constructor(private usuarioRepository: UsuarioRepository) {}
  
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.findAll()
  }

  async findById(id: number): Promise<Usuario> {
    return this.usuarioRepository.findById(id);
  }

  async create(usuario: CriaUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.create(usuario)
  }
}
