import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { StartOfMonth } from 'src/domain/shared/providers/date/startOfMonth';

Injectable();
export class startOfMonthDayjs extends StartOfMonth {
  execute(): Date {
    return dayjs().startOf('M').toDate();
  }
}
