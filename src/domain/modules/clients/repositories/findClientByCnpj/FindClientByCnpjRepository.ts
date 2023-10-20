import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ClientEntity } from '../../entities/ClientEntity';

export class FindClientByCnpjRepository extends BaseRepository {
  async run(_cnpj: string): Promise<ClientEntity> {
    throw new ErrorNotImplementedYet();
  }
}
