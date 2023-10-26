import { BaseRepository } from 'src/domain/base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from 'src/domain/errors/NotImplementYet/ErrorNotImplementYet';
import { ListDemandUseCaseInput } from '../../useCases/ListDemands/adapters/input/ListDemadUseCaseInput';

export class CountDemandsRepository extends BaseRepository {
  run(_any: ListDemandUseCaseInput): Promise<number> {
    throw new ErrorNotImplementedYet();
  }
}
