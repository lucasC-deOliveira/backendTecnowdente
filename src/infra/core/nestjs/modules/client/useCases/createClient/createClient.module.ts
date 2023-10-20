import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityTypeorm } from 'src/database/typeorm/entities/client/ClientEntityTypeorm';
import { CreateClientUseCaseNestjs } from './CreateClientUseCaseNestjs';
import { FindClientByCnpjRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientByCnpj/FindClientByCnpjRepositoryTypeorm';
import { CreateClientRepositoryTypeorm } from 'src/database/typeorm/repositories/client/createClient/CreateClientRepositoryTypeorm';
import { CreateClientController } from 'src/infra/core/nestjs/presentation/rest/controller/client/createClient/create-client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntityTypeorm])],
  providers: [
    CreateClientUseCaseNestjs,
    FindClientByCnpjRepositoryTypeorm,
    CreateClientRepositoryTypeorm,
  ],
  controllers: [CreateClientController],
})
export class CreateClientModule {}
