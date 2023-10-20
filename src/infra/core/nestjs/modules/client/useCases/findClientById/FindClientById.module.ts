import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityTypeorm } from 'src/database/typeorm/entities/client/ClientEntityTypeorm';
import { FindClientByIdUseCaseNestjs } from './FindClientByIdUseCase';
import { FindClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientById/FindClientByIdRepositoryTypeorm';
import { FindClientByIdController } from 'src/infra/core/nestjs/presentation/rest/controller/client/findClientById/find-client-by-id.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntityTypeorm])],
  providers: [FindClientByIdUseCaseNestjs, FindClientByIdRepositoryTypeorm],
  controllers: [FindClientByIdController],
})
export class FindClientByIdModule {}
