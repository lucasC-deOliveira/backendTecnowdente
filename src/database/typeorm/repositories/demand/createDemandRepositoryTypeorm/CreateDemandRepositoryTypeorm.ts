import { Repository } from 'typeorm';
import { CreateDemandRepository } from '../../../../../domain/modules/demand/repositories/createDemandRepository/CreateDemandRepository';
import { CreateDemandRepositoryInput } from '../../../../../domain/modules/demand/repositories/createDemandRepository/adapters/input/CreateDemandRepositoryInput';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { DemandServiceDetailsEntityTypeorm } from '../../../entities/demand/DemandServiceDetailsEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateDemandRepositoryTypeorm extends CreateDemandRepository {
  constructor(
    @InjectRepository(DemandEntityTypeorm)
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
    @InjectRepository(DemandServiceDetailsEntityTypeorm)
    private readonly demandServiceDetailsRepository: Repository<DemandServiceDetailsEntityTypeorm>,
  ) {
    super();
  }
  async run({
    amount,
    client_id,
    cost,
    deadline,
    observations,
    patient,
    services,
    state,
    type,
  }: CreateDemandRepositoryInput): Promise<void> {
    const manager = this.demandRepository.manager;

    await manager.transaction(async (transactionalEntityManager) => {
      const demand = transactionalEntityManager.create(DemandEntityTypeorm, {
        amount,
        client_id,
        deadline,
        observations,
        state,
        patient,
        cost,
        type,
      });

      const servicesDetails = services.map((service) =>
        this.demandServiceDetailsRepository.create({
          demand_id: demand.id,
          service_id: service.id,
          quantity: service.quantity,
        }),
      );

      await transactionalEntityManager.save(DemandEntityTypeorm, demand);

      await transactionalEntityManager.save(
        DemandServiceDetailsEntityTypeorm,
        servicesDetails,
      );
    });
  }
}
