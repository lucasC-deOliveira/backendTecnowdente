import { ClientEntity } from 'src/domain/modules/clients/entities/ClientEntity';

export class ListAllClientUseCaseOutput {
  clients: ClientEntity[];
  totalClients: number;
}
