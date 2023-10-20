import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { AddMonth } from 'src/domain/shared/providers/date/addMonth';

@Injectable()
export class AddMonthDayjs extends AddMonth {
  execute(date: Date): Date {
    return dayjs(date).add(1, 'M').toDate();
  }
}
