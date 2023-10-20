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
        await typeOrmConnectionDataSource
          .initialize()
          .then(() =>
            Logger.warn(
              'conectado ao banco de dados: ' + process.env.DATABASE_DATABASE,
            ),
          )
          .catch((e) =>
            Logger.error('erro ao conectar ao banco de dados ' + e.message),
          );
        return typeOrmConnectionDataSource;
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
