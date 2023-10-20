import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class DateNow {
  execute(): Date {
    throw new ErrorNotImplementedYet();
  }
}
