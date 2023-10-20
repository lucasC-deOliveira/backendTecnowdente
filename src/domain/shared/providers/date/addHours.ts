import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class AddHours {
  execute(hour: number): Date {
    throw new ErrorNotImplementedYet();
  }
}
