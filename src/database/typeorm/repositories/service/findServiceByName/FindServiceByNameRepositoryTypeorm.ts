import { Repository } from 'typeorm';
import { FindServiceByNameRepository } from '../../../../../domain/modules/service/repositories/findServiceByName/FindServiceByNameRepository';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { ServiceEntity } from '../../../../../domain/modules/service/entities/serviceEntity';
import { InjectRepository } from '@nestjs/typeorm';

export class FindServiceByNameRepositoryTypeorm extends FindServiceByNameRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private readonly serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }
  async run(name: string): Promise<ServiceEntity> {
    return await this.serviceRepository.findOneBy({ name });
  }
}
