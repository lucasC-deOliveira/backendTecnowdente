import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class AddMonth {
  execute(date: Date): Date {
    throw new ErrorNotImplementedYet();
  }
}
