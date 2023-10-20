import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { EditClientRepositoryInput } from './adapters/input/EdiClientRepositoryInput';

export class EditClientRepository extends BaseRepository {
  async run(_input: EditClientRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
