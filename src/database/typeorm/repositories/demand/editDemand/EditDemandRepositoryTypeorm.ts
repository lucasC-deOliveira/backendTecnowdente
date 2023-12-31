import { Repository } from 'typeorm';
import { EditDemandRepository } from '../../../../../domain/modules/demand/repositories/editDemand/EditDemandRepository';
import { EditDemandRepositoryInput } from '../../../../../domain/modules/demand/repositories/editDemand/adapters/input/EditDemandRepositoryInput';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { DemandServiceDetailsEntityTypeorm } from '../../../entities/demand/DemandServiceDetailsEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EditDemandRepositoryTypeorm extends EditDemandRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }
  async run({
    amount,
    client_id,
    cost,
    deadline,
    id,
    observations,
    patient,
    services,
    state,
    type,
  }: EditDemandRepositoryInput): Promise<void> {
    const manager = this.demandRepository.manager;

    await manager.transaction(async (transactionalEntityManager) => {
      const demand = await transactionalEntityManager.findOneBy(
        DemandEntityTypeorm,
        { id },
      );

      await transactionalEntityManager.delete(DemandEntityTypeorm, { id });

      await transactionalEntityManager.delete(
        DemandServiceDetailsEntityTypeorm,
        { demand_id: id },
      );

      const newDemand = transactionalEntityManager.create(DemandEntityTypeorm, {
        id: id,
        amount,
        client_id,
        deadline,
        observations,
        state,
        patient,
        cost,
        type,
        receivement: demand.receivement,
        report_id: demand.report_id,
      });

      const servicesDetails = services.map((service) =>
        transactionalEntityManager.create(DemandServiceDetailsEntityTypeorm, {
          demand_id: demand.id,
          service_id: service.id,
          quantity: service.quantity,
        }),
      );

      await transactionalEntityManager.save(DemandEntityTypeorm, newDemand);

      await transactionalEntityManager.save(
        DemandServiceDetailsEntityTypeorm,
        servicesDetails,
      );
    });
  }
}
