import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { AddHours } from 'src/domain/shared/providers/date/addHours';
@Injectable()
export class AddHoursDayjs extends AddHours {
  execute(hour: number): Date {
    return dayjs().add(hour, 'hour').toDate();
  }
}
