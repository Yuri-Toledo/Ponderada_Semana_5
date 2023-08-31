import { Injectable } from '@nestjs/common';
import { EmpregoRepository } from './emprego.repository'
import { CriaEmpregoDto } from './dto/criaEmprego.dto';
import { Emprego } from '@prisma/client';

@Injectable()
export class EmpregoService {

  constructor(private empregoRepository: EmpregoRepository) {}
  
  async findAll(): Promise<Emprego[]> {
    return this.empregoRepository.findAll()
  }

  async findById(id: number): Promise<Emprego> {
    return this.empregoRepository.findById(id);
  }

  async create(emprego: CriaEmpregoDto): Promise<Emprego> {
    return this.empregoRepository.create(emprego)
  }
}
