import { Repository } from 'typeorm';
import { DemandEntity } from '../../../../../domain/modules/demand/entities/DemandEntity';
import { ListDemandsRepository } from '../../../../../domain/modules/demand/repositories/listDemands/ListDemandsRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListDemandsRepositoryTypeorm extends ListDemandsRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run(page: number): Promise<DemandEntity[]> {
    const limit = 5;

    if (!page) {
      page = 1;
    }

    const offset = limit * page - limit;

    const demands = await this.demandRepository.find({
      relations: ['client', 'services', 'servicesDetails'],
      skip: offset > 1 ? offset : 0,
      take: limit,
    });

    // const totalItens = await this.demandRepository.count()

    return demands;
  }
}
