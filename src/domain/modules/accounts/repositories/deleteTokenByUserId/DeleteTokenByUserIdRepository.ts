import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';

export class DeleteTokenByUserIdRepository extends BaseRepository {
  run(_id: string): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
