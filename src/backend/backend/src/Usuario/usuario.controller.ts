import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '@prisma/client';
import { CriaUsuarioDto } from './dto/criaUsuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Usuario> {
    const intId = parseInt(id); 
    return this.usuarioService.findById(intId)
  }

  @Post()
  async create(@Body() usuario: CriaUsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(usuario)
  }
}


