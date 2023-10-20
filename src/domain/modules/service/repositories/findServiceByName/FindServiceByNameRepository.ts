import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ServiceEntity } from '../../entities/serviceEntity';

export class FindServiceByNameRepository extends BaseRepository {
  async run(_name: string): Promise<ServiceEntity> {
    throw new ErrorNotImplementedYet();
  }
}
