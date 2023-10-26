import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { CountDemandsRepository } from 'src/domain/modules/demand/repositories/countDemands/CountDemandsReporitory';
import { ListDemandUseCaseInput } from 'src/domain/modules/demand/useCases/ListDemands/adapters/input/ListDemadUseCaseInput';
import { Between, FindManyOptions, In, IsNull, Repository } from 'typeorm';
@Injectable()
export class CountDemandsRepositoryTypeorm extends CountDemandsRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run({
    client_id,
    deadline,
    from,
    is_report_null,
    patient,
    receivement,
    states,
    to,
    type,
  }: ListDemandUseCaseInput): Promise<number> {
    const where: any = {};

    if (client_id) {
      where.client_id = client_id;
    }

    if (from && to) {
      where.receivement = Between(
        `${new Date(from).toISOString().split('T')[0]}:T00:00:00.000Z`,
        `${new Date(to).toISOString().split('T')[0]}:T23:59:59.999Z`,
      );
    }

    if (states) {
      where.state = In(states);
    }

    if (type) {
      where.type = type;
    }

    if (deadline) {
      where.deadline = Between(
        `${new Date(deadline).toISOString().split('T')[0]}T00:00:00.000Z`,
        `${new Date(deadline).toISOString().split('T')[0]}T23:59:59.999Z`,
      );
    }

    if (patient) {
      where.patient = patient;
    }

    if (receivement && !to && !from) {
      where.receivement = Between(
        `${new Date(receivement).toISOString().split('T')[0]}T00:00:00.000Z`,
        `${new Date(receivement).toISOString().split('T')[0]}T23:59:59.999Z`,
      );
    }

    if (is_report_null) {
      where.report_id = IsNull();
    }

    const findOptions: FindManyOptions = {
      where,
      relations: ['client', 'services', 'servicesDetails'],
    };

    const totalItens = await this.demandRepository.count(findOptions);

    return totalItens;
  }
}
