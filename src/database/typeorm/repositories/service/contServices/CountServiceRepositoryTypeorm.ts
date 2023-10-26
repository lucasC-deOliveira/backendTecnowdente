import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { CountServiceRepository } from 'src/domain/modules/service/repositories/countServices/CountServicesRepository';
import { Repository } from 'typeorm';

@Injectable()
export class CountServiceRepositoryTypeorm extends CountServiceRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }
  async run(): Promise<number> {
    return await this.serviceRepository.count({ where: { active: true } });
  }
}
