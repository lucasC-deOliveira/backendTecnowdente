import { Repository } from 'typeorm';
import { RemoveDemandByIdRepository } from '../../../../../domain/modules/demand/repositories/removeDemandById/RemoveDemandByIdRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RemoveDemandByIdRepositoryTypeorm extends RemoveDemandByIdRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }

  async run(id: string): Promise<void> {
    await this.demandRepository.delete(id);
  }
}
