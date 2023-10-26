import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityTypeorm } from 'src/database/typeorm/entities/client/ClientEntityTypeorm';
import { ListAllClientUseCaseNestjs } from './ListAllClientUseCaseNestjs';
import { ListAllClientsRepositoryTypeorm } from 'src/database/typeorm/repositories/client/listAllClients/ListAllClientsRepositoryTypeorm';
import { ListAllClientController } from 'src/infra/core/nestjs/presentation/rest/controller/client/listAllClient/list-all-client.controller';
import { CountClientsRepositoryTypeorm } from 'src/database/typeorm/repositories/client/countAllClients/CountClientsRepositoryTypeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntityTypeorm])],
  providers: [
    ListAllClientUseCaseNestjs,
    ListAllClientsRepositoryTypeorm,
    CountClientsRepositoryTypeorm,
  ],
  controllers: [ListAllClientController],
})
export class ListAllClientModule {}
