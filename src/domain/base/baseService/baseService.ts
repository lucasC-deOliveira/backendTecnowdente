/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorNotImplementedYet } from '../../errors/NotImplementYet/ErrorNotImplementYet';

export class BaseService {
  async execute(_: any): Promise<any> {
    throw new ErrorNotImplementedYet();
  }
}
