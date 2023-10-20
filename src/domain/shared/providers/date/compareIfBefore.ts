import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class CompareIfBefore {
  execute(start_date: Date, end_date: Date): boolean {
    throw new ErrorNotImplementedYet();
  }
}
