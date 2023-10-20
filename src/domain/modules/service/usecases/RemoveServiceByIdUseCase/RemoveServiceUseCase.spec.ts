import { ServiceRepositoryInMemory } from '../../repositories/in-memory/ServiceRepositoryInMemory';
import { CreateServiceUseCase } from '../CreateServiceUseCase/CreateServiceUseCase';
import { RemoveServiceUseCase } from './RemoveServiceUseCase';

let removeServiceUseCase: RemoveServiceUseCase;
let serviceRepository: ServiceRepositoryInMemory;
let createServiceUseCase: CreateServiceUseCase;

describe('Remove service', () => {
  beforeAll(() => {
    serviceRepository = new ServiceRepositoryInMemory();
    createServiceUseCase = new CreateServiceUseCase(serviceRepository);
    removeServiceUseCase = new RemoveServiceUseCase(serviceRepository);
  });

  it('should be able to remove a service', async () => {
    const service = await createServiceUseCase.execute({
      name: 'PPA',
      amount: 300,
    });

    await removeServiceUseCase.execute(service.id);

    const serviceRemoved = await serviceRepository.listByName(service.name);

    expect(serviceRemoved).toBeUndefined();
  });
});
