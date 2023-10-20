import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { CompareInHours } from 'src/domain/shared/providers/date/CompareInHours';
@Injectable()
export class compareInHoursDayjs extends CompareInHours {
  execute(start_date: Date, end_date: Date): number {
    const end_date_utc = dayjs(end_date).utc().local().format();
    const start_date_utc = dayjs(start_date).utc().local().format();
    return dayjs(end_date_utc).diff(start_date_utc, 'hours');
  }
}
