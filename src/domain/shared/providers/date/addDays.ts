import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class AddDays {
  execute(days: number): Date {
    throw new ErrorNotImplementedYet();
  }
}
