import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { ListAllServicesRepositoryTypeorm } from 'src/database/typeorm/repositories/service/listAllServices/listAlllServicesRepositoryTypeorm';
import { ListAllServicesController } from 'src/infra/core/nestjs/presentation/rest/controller/service/listServices/list-services.controller';
import { ListServiceAllUseCaseNestjs } from './listAllServicesUseCaseNestjs';
import { CountServiceRepositoryTypeorm } from 'src/database/typeorm/repositories/service/contServices/CountServiceRepositoryTypeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntityTypeorm])],
  providers: [
    ListServiceAllUseCaseNestjs,
    ListAllServicesRepositoryTypeorm,
    CountServiceRepositoryTypeorm,
  ],
  controllers: [ListAllServicesController],
})
export class ListAllServicesModule {}
