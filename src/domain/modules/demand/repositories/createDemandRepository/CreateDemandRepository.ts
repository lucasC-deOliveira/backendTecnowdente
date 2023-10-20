import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { CreateDemandRepositoryInput } from './adapters/input/CreateDemandRepositoryInput';

export class CreateDemandRepository extends BaseRepository {
  async run(_: CreateDemandRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
