import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { AddDays } from 'src/domain/shared/providers/date/addDays';
@Injectable()
export class AddDaysDayjs extends AddDays {
  execute(days: number): Date {
    return dayjs().add(days, 'days').toDate();
  }
}
