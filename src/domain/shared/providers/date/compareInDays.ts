import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class CompareInDays {
  execute(start_date: Date, end_date: Date): number {
    throw new ErrorNotImplementedYet();
  }
}
