import { Global, Logger, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import typeOrmConnectionDataSource from './';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      useFactory: async () => {
        typeOrmConnectionDataSource;

        return typeOrmConnectionDataSource;
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
