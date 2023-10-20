import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { EditServiceByIdRepositoryInput } from './adapters/input/EditServiceByIdRepositoryInput';

export class EditServiceByIdRepository extends BaseRepository {
  async run(_input: EditServiceByIdRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
