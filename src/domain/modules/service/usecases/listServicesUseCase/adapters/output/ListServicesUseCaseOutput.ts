import { ServiceEntity } from 'src/domain/modules/service/entities/serviceEntity';

export class ListServicesUseCaseOutput {
  services: ServiceEntity[];
  totalServices: number;
}
