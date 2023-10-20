import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { CompareIfBefore } from 'src/domain/shared/providers/date/compareIfBefore';

@Injectable()
export class CompareIfBeforeDayjs extends CompareIfBefore {
  execute(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }
}
