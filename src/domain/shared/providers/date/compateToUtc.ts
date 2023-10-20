import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class ConvertToUtc {
  execute(date: Date): string {
    throw new ErrorNotImplementedYet();
  }
}
