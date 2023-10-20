import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { DateNow } from 'src/domain/shared/providers/date/dateNow';

Injectable();
export class dateNowDayjs extends DateNow {
  execute(): Date {
    return dayjs().toDate();
  }
}
