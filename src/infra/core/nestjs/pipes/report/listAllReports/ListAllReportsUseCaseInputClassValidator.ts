import { Optional } from '@nestjs/common';

export class ListAllReportsUseCaseClassValidator {
  @Optional()
  page?: number;
}
