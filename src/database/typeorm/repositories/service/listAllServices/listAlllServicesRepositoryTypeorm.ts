import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { ServiceEntity } from 'src/domain/modules/service/entities/serviceEntity';
import { ListAllServicesRepository } from 'src/domain/modules/service/repositories/listAllServices/ListAllServicesRepository';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ListAllServicesRepositoryTypeorm extends ListAllServicesRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private readonly serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }
  async run(page?: number): Promise<ServiceEntity[]> {
    const limit = 5;

    const where: any = { active: true };

    const offset = limit * page - limit;

    const findOptions: FindManyOptions = {
      where,
    };

    if (page) {
      (findOptions.skip = offset > 1 ? offset : 0), (findOptions.take = limit);
    }
    return await this.serviceRepository.find(findOptions);
  }
}
