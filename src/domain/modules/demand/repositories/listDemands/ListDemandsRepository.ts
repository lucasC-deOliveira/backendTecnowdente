import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { DemandEntity } from '../../entities/DemandEntity';

export class ListDemandsRepository extends BaseRepository {
  async run(_page: number): Promise<DemandEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
