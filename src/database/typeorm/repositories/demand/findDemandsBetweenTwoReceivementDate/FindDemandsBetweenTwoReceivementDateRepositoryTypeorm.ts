import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { DemandEntity } from 'src/domain/modules/demand/entities/DemandEntity';
import { FindDemandsBetweenTwoReceivementDateRepository } from 'src/domain/modules/demand/repositories/findDemandsBetweenTwoReceivementDate/FindDemandsBetweenTwoReceivementDateRepository';
import { FindDemandsBetweenTwoReceivementDateRepositoryInput } from 'src/domain/modules/demand/repositories/findDemandsBetweenTwoReceivementDate/adapters/input/FindDemandsBetweenTwoReceivementDateRepositoryInput';
import { Between, Repository } from 'typeorm';
@Injectable()
export class FindDemandsBetweenTwoReceivementDateRepositoryTypeorm extends FindDemandsBetweenTwoReceivementDateRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }

  async run({
    from,
    to,
  }: FindDemandsBetweenTwoReceivementDateRepositoryInput): Promise<
    DemandEntity[]
  > {
    return await this.demandRepository.find({
      where: { receivement: Between(from, to) },
      relations: ['services'],
    });
  }
}
