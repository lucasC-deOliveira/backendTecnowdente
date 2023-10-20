import { FindDemandByIdRepository } from '../../repositories/findDemandById/FindDemandByIdRepository';
import { RemoveDemandByIdRepository } from '../../repositories/removeDemandById/RemoveDemandByIdRepository';

class RemoveDemandUseCase {
  constructor(
    private readonly findDemandByIdRepository: FindDemandByIdRepository,
    private readonly removeDemandByIdRepository: RemoveDemandByIdRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const demandExists = await this.findDemandByIdRepository.run(id);

    if (!demandExists) {
      throw new Error('Demand not exists!');
    }

    await this.removeDemandByIdRepository.run(id);
  }
}

export { RemoveDemandUseCase };
