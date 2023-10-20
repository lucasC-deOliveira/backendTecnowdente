import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { DemandEntity } from '../../entities/DemandEntity';
import { FindDemandsBetweenTwoReceivementDateRepositoryInput } from './adapters/input/FindDemandsBetweenTwoReceivementDateRepositoryInput';

export class FindDemandsBetweenTwoReceivementDateRepository extends BaseRepository {
  async run(
    _input: FindDemandsBetweenTwoReceivementDateRepositoryInput,
  ): Promise<DemandEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
