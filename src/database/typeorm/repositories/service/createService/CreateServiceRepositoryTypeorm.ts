import { Repository } from 'typeorm';
import { CreateServiceRepository } from '../../../../../domain/modules/service/repositories/createService/CreateServiceRepository';
import { CreateServiceRepositoryInput } from '../../../../../domain/modules/service/repositories/createService/input/CreateServiceRepositoryInput';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { InjectRepository } from '@nestjs/typeorm';

export class CreateServiceRepositoryTypeorm extends CreateServiceRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }

  async run({
    amount,
    cost,
    name,
  }: CreateServiceRepositoryInput): Promise<void> {
    const service = this.serviceRepository.create({
      amount,
      cost,
      name,
    });

    await this.serviceRepository.save(service);
  }
}
