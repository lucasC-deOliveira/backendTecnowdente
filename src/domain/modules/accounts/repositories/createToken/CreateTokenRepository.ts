import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { CreateTokenRepositoryInput } from './adapters/input/CreateTokenRepositoryInput';

export class CreateTokenRepository extends BaseRepository {
  async run(_input: CreateTokenRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
