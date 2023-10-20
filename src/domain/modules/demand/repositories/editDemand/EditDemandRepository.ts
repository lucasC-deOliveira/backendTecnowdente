import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { EditDemandRepositoryInput } from './adapters/input/EditDemandRepositoryInput';

export class EditDemandRepository extends BaseRepository {
  run(_input: EditDemandRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
