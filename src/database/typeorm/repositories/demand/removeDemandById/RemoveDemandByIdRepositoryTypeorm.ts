import { Repository } from 'typeorm';
import { RemoveDemandByIdRepository } from '../../../../../domain/modules/demand/repositories/removeDemandById/RemoveDemandByIdRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';

export class RemoveDemandByIdRepositoryTypeorm extends RemoveDemandByIdRepository {
  constructor(private demandRepository: Repository<DemandEntityTypeorm>) {
    super();
  }

  async run(id: string): Promise<void> {
    await this.demandRepository.delete(id);
  }
}
