import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';

export class BaseController {
  async handle(..._any: any): Promise<any> {
    throw new ErrorNotImplementedYet();
  }
}
