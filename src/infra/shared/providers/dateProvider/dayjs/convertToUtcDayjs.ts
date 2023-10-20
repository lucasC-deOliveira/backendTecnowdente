import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { ConvertToUtc } from 'src/domain/shared/providers/date/compateToUtc';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
Injectable();
export class convertToUtcDayjs extends ConvertToUtc {
  execute(date: Date): string {
    return dayjs(date).utc().local().format();
  }
}
