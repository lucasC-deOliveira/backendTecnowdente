import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ReportEntity } from '../../entities/reportEntity';

export class FindReportByIdRepository extends BaseRepository {
  async run(_id: string): Promise<ReportEntity> {
    throw new ErrorNotImplementedYet();
  }
}
