import { Between, FindManyOptions, In, IsNull, Repository } from 'typeorm';
import { DemandEntity } from '../../../../../domain/modules/demand/entities/DemandEntity';
import { ListDemandsRepository } from '../../../../../domain/modules/demand/repositories/listDemands/ListDemandsRepository';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListDemandUseCaseInput } from 'src/domain/modules/demand/useCases/ListDemands/adapters/input/ListDemadUseCaseInput';

@Injectable()
export class ListDemandsRepositoryTypeorm extends ListDemandsRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run({
    from,
    states,
    to,
    type,
    client_id,
    deadline,
    page,
    patient,
    receivement,
    is_report_null,
  }: ListDemandUseCaseInput): Promise<DemandEntity[]> {
    const limit = 5;

    const where: any = {};

    if (client_id) {
      where.client_id = client_id;
    }

    if (from && to) {
      where.receivement = Between(from, to);
    }

    if (states) {
      where.state = In(states);
    }

    if (type) {
      where.type = type;
    }

    if (deadline) {
      where.deadline = deadline;
    }

    if (patient) {
      where.patient;
    }

    if (receivement && !to && !from) {
      where.receivement = receivement;
    }

    if (is_report_null) {
      where.report_id = IsNull();
    }

    const offset = limit * page - limit;

    const findOptions: FindManyOptions = {
      where,
      relations: ['client', 'services', 'servicesDetails'],
    };

    if (page) {
      (findOptions.skip = offset > 1 ? offset : 0), (findOptions.take = limit);
    }

    const demands = await this.demandRepository.find(findOptions);

    // const totalItens = await this.demandRepository.count()

    return demands;
  }
}
