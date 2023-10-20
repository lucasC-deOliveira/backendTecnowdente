import { Repository } from 'typeorm';
import { DesativeServiceByIdRepository } from '../../../../../domain/modules/service/repositories/desativeServiceById/DesactiveServiceByIdRepository';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DesativeServiceByIdRepositoryTypeorm extends DesativeServiceByIdRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private readonly serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }

  async run(id: string): Promise<any> {
    await this.serviceRepository.update(id, { active: false });
  }
}
