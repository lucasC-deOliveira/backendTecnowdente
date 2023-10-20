import { CreateServiceRepository } from '../../repositories/createService/CreateServiceRepository';
import { FindServiceByNameRepository } from '../../repositories/findServiceByName/FindServiceByNameRepository';
import { CreateServiceUseCaseInput } from './adapters/input/CreateServiceUseCaseInput';

class CreateServiceUseCase {
  constructor(
    private readonly findServiceByNameRepository: FindServiceByNameRepository,
    private readonly createServiceRepository: CreateServiceRepository,
  ) {}

  async execute({
    name,
    amount,
    cost,
  }: CreateServiceUseCaseInput): Promise<void> {
    const serviceWithThisNameExists =
      await this.findServiceByNameRepository.run(name);

    if (serviceWithThisNameExists) {
      throw new Error('service Already Exists');
    }

    await this.createServiceRepository.run({
      name,
      amount,
      cost,
    });
  }
}

export { CreateServiceUseCase };
