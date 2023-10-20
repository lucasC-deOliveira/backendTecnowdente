import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';

export class DesativeServiceByIdRepository extends BaseRepository {
  async run(_id: string): Promise<any> {
    throw new ErrorNotImplementedYet();
  }
}
