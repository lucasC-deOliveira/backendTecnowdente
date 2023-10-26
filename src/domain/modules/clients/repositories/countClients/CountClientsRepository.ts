import { BaseRepository } from 'src/domain/base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class CountClientsRepository extends BaseRepository {
  run(): Promise<number> {
    throw new ErrorNotImplementedYet();
  }
}
