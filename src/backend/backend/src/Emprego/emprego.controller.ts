import {Controller, Get, Post, Param, Body} from '@nestjs/common';
import { EmpregoService } from './emprego.service'; 
import { Emprego } from '@prisma/client';
import { CriaEmpregoDto } from './dto/criaEmprego.dto'

@Controller('emprego')
export class EmpregoController {
  constructor(private readonly empregoService: EmpregoService) {}

  @Get()
  async findAll(): Promise<Emprego[]> {
    return this.empregoService.findAll();
  }

  @Get(':id')
  async findById(@Param() id: string): Promise<Emprego> {
    const intId = parseInt(id); 
    return this.empregoService.findById(intId)
  }

  @Post()
  async create(@Body() emprego: CriaEmpregoDto): Promise<void> {
    this.empregoService.create(emprego)
  }
}