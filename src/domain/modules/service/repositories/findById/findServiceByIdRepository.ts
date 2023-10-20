import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ServiceEntity } from '../../entities/serviceEntity';

export class FindServiceByIdRepository extends BaseRepository {
  async run(_id: string): Promise<ServiceEntity> {
    throw new ErrorNotImplementedYet();
  }
}
