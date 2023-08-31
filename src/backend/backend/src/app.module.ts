import { Module } from '@nestjs/common';
import { EmpregoModule } from './Emprego/emprego.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [EmpregoModule, UsuarioModule ],
  // ...
})
export class AppModule {}

