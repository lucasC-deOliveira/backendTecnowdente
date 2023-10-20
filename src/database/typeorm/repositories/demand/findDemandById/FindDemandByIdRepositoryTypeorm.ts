import { Repository } from 'typeorm';
import { DemandEntity } from '../../../../../domain/modules/demand/entities/DemandEntity';
import { FindDemandByIdRepository } from '../../../../../domain/modules/demand/repositories/findDemandById/FindDemandByIdRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindDemandByIdRepositoryTypeorm extends FindDemandByIdRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<DemandEntity> {
    return await this.demandRepository.findOne({
      where: { id },
      relations: ['client', 'services', 'servicesDetails'],
    });
  }
}
