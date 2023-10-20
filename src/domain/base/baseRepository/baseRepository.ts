/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorNotImplementedYet } from '../../errors/NotImplementYet/ErrorNotImplementYet';

export class BaseRepository {
  async run(_: any): Promise<any> {
    throw new ErrorNotImplementedYet();
  }
}
