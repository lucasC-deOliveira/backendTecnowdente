import { In, Repository } from 'typeorm';
import { FindServiceByIdsRepository } from '../../../../../domain/modules/service/repositories/findServicesByIds/FindServiceByIdsRepository';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { ServiceEntity } from '../../../../../domain/modules/service/entities/serviceEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindServicesByIdsRepositoryTypeorm extends FindServiceByIdsRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private readonly serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }

  async run(ids: string[]): Promise<ServiceEntity[]> {
    const services = await this.serviceRepository.findBy({ id: In(ids) });

    return services;
  }
}
