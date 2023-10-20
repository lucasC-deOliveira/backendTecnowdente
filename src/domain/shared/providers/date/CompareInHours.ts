import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class CompareInHours {
  execute(start_date: Date, end_date: Date): number {
    throw new ErrorNotImplementedYet();
  }
}
