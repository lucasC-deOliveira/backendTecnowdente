import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ClientEntity } from '../../entities/ClientEntity';

export class ListAllClientsRepository implements BaseRepository {
  async run(): Promise<ClientEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
