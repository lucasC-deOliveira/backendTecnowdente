import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { CreateClientRepositoryInput } from './adapters/input/CreateClientRepositoryInput';

export class CreateClientRepository implements BaseRepository {
  run(_input: CreateClientRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
