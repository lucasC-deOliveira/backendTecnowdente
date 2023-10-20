import { Repository } from 'typeorm';
import { EditServiceByIdRepository } from '../../../../../domain/modules/service/repositories/editServiceById/EditServiceByIdRepository';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { EditServiceByIdRepositoryInput } from '../../../../../domain/modules/service/repositories/editServiceById/adapters/input/EditServiceByIdRepositoryInput';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class EditServiceByIdRepositoryTypeorm extends EditServiceByIdRepository {
  constructor(
    @InjectRepository(ServiceEntityTypeorm)
    private serviceRepository: Repository<ServiceEntityTypeorm>,
  ) {
    super();
  }

  async run({
    amount,
    cost,
    id,
    name,
  }: EditServiceByIdRepositoryInput): Promise<void> {
    await this.serviceRepository.update(id, { amount, cost, id, name });
  }
}
