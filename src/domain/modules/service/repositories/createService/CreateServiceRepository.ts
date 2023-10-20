import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { CreateServiceRepositoryInput } from './input/CreateServiceRepositoryInput';

export class CreateServiceRepository extends BaseRepository {
  async run(_input: CreateServiceRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
