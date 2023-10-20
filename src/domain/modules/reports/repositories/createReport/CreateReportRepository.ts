import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { CreateReportRepositoryInput } from '../../useCases/create/adapters/input/CreateReportUseCaseInput';

export class CreateReportRepository extends BaseRepository {
  async run(_input: CreateReportRepositoryInput): Promise<void> {
    throw new ErrorNotImplementedYet();
  }
}
