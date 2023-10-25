import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { DemandEntity } from '../../entities/DemandEntity';
import { ListDemandUseCaseInput } from '../../useCases/ListDemands/adapters/input/ListDemadUseCaseInput';

export class ListDemandsRepository extends BaseRepository {
  async run(input: ListDemandUseCaseInput): Promise<DemandEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
