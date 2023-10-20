import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { DemandEntity } from '../../entities/DemandEntity';

export class FindDemandByIdRepository extends BaseRepository {
  async run(_id: string): Promise<DemandEntity> {
    throw new ErrorNotImplementedYet();
  }
}
