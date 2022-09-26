import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('databaseHost'),
        port: config.get('databasePort'),
        database: config.get('databaseName'),
        username: config.get('databaseUser'),
        password: config.get('databasePassword'),
        entities: [join(__dirname, '..', '**', '*.entity.{js,ts}')],
        migrations: [join(__dirname, '..', '**', 'migrations', '*.{js,ts}')],
        migrationsTableName: 'boost_migrations',
        logger: 'file',
        autoLoadEntities: true,
        // synchronize: config.get('NODE_ENV') !== 'production', // never use TRUE in production!
      }),
    }),
  ],
})
export class DbModule {}
