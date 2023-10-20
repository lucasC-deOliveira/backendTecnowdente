import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityTypeorm } from 'src/database/typeorm/entities/client/ClientEntityTypeorm';
import { RemoveClientUseCaseNestjs } from './RemoveClientUseCaseNestjs';
import { FindClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientById/FindClientByIdRepositoryTypeorm';
import { DesativeClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/desativeClientById/DesativeClientByIdRepositoryTypeorm';
import { RemoveClientController } from 'src/infra/core/nestjs/presentation/rest/controller/client/removeClient/remove-client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntityTypeorm])],
  providers: [
    DesativeClientByIdRepositoryTypeorm,
    RemoveClientUseCaseNestjs,
    FindClientByIdRepositoryTypeorm,
  ],
  controllers: [RemoveClientController],
})
export class RemoveClientModule {}
