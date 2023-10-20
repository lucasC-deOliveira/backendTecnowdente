import { Repository } from 'typeorm';
import { FindServiceByIdRepository } from '../../../../../domain/modules/service/repositories/findById/findServiceByIdRepository';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { ServiceEntity } from '../../../../../domain/modules/service/entities/serviceEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindServiceByIdRepositoryTypeorm extends FindServiceByIdRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }

  async run(id: string): Promise<ServiceEntity> {
    return await this.serviceRepository.findOneBy({ id });
  }
}
