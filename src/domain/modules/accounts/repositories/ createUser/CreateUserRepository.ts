import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { CreateUserRepositoryInput } from './adapters/input/CreateUserRepositoryInput';

export class CreateUserRepository extends BaseRepository {
  async run(_input: CreateUserRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
