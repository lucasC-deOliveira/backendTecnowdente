import { BaseRepository } from '../../../../base/baseRepository/baseRepository';
import { ErrorNotImplementedYet } from '../../../../errors/NotImplementYet/ErrorNotImplementYet';
import { ReportEntity } from '../../entities/reportEntity';

export class ListReportRepository extends BaseRepository {
  async run(page?: number): Promise<ReportEntity[]> {
    throw new ErrorNotImplementedYet();
  }
}
