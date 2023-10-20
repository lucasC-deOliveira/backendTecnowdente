import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { ServiceEntity } from 'src/domain/modules/service/entities/serviceEntity';
import { ListAllServicesRepository } from 'src/domain/modules/service/repositories/listAllServices/ListAllServicesRepository';
import { Repository } from 'typeorm';

@Injectable()
export class ListAllServicesRepositoryTypeorm extends ListAllServicesRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private readonly serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }
  async run(): Promise<ServiceEntity[]> {
    return await this.serviceRepository.find();
  }
}
