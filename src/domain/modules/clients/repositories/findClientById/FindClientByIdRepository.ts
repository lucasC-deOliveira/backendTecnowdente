import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ClientEntity } from '../../entities/ClientEntity';

export class FindClientByIdRepository implements BaseRepository {
  async run(_id: string): Promise<ClientEntity> {
    throw new ErrorNotImplementedYet();
  }
}
