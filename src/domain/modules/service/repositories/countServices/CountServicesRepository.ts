import { BaseRepository } from 'src/domain/base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class CountServiceRepository extends BaseRepository {
  run(): Promise<number> {
    throw new ErrorNotImplementedYet();
  }
}
