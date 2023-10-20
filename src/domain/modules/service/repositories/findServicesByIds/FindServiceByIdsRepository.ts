/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ServiceEntity } from '../../entities/serviceEntity';

export class FindServiceByIdsRepository extends BaseRepository {
  async run(_ids: string[]): Promise<ServiceEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
