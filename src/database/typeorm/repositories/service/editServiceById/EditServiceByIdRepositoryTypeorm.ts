import { Repository } from 'typeorm';
import { EditServiceByIdRepository } from '../../../../../domain/modules/service/repositories/editServiceById/EditServiceByIdRepository';
import { ServiceEntityTypeorm } from '../../../entities/service/service';
import { EditServiceByIdRepositoryInput } from '../../../../../domain/modules/service/repositories/editServiceById/adapters/input/EditServiceByIdRepositoryInput';

export class EditServiceByIdRepositoryTypeorm extends EditServiceByIdRepository {
  constructor(private serviceRepository: Repository<ServiceEntityTypeorm>) {
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
