import { Module } from '@nestjs/common';
import { EmpregoController } from './emprego.controller';
import { EmpregoService } from './emprego.service';
import { EmpregoRepository } from './emprego.repository';

@Module({
    controllers: [EmpregoController],
    providers: [EmpregoService, EmpregoRepository]
})
export class EmpregoModule{};