import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';

export class DeleteTokenByIdRepository extends BaseRepository {
  async run(_id: string): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
