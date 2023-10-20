import { Repository } from 'typeorm';
import { DemandEntity } from '../../../../../domain/modules/demand/entities/DemandEntity';
import { FindDemandByIdRepository } from '../../../../../domain/modules/demand/repositories/findDemandById/FindDemandByIdRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';

export class FindDemandByIdRepositoryTypeorm extends FindDemandByIdRepository {
  constructor(private demandRepository: Repository<DemandEntityTypeorm>) {
    super();
  }
  async run(id: string): Promise<DemandEntity> {
    return await this.demandRepository.findOne({
      where: { id },
      relations: ['client', 'services', 'servicesDetails'],
    });
  }
}
