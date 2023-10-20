import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityTypeorm } from 'src/database/typeorm/entities/client/ClientEntityTypeorm';
import { EditClientUseCaseNestjs } from './EditClientUseCaseNestjs';
import { EditClientRepositoryTypeorm } from 'src/database/typeorm/repositories/client/editClient/EditClientRepositoryTypeorm';
import { FindClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientById/FindClientByIdRepositoryTypeorm';
import { EditClientController } from 'src/infra/core/nestjs/presentation/rest/controller/client/edit/edit-client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntityTypeorm])],
  providers: [
    EditClientUseCaseNestjs,
    EditClientRepositoryTypeorm,
    FindClientByIdRepositoryTypeorm,
  ],
  controllers: [EditClientController],
})
export class EditClientModule {}
