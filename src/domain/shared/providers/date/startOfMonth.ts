import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class StartOfMonth {
  execute(): Date {
    throw new ErrorNotImplementedYet();
  }
}
