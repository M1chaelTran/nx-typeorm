import { join } from 'path';
import { DataSource } from 'typeorm';

export const OrmConfigDs = new DataSource({
  entities: [join(__dirname, '../..', '**', '*.entity.{js,ts}')],
  migrations: [join(__dirname, '../..', '**', 'migrations', '*.{js,ts}')],
  type: 'postgres',
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  // @ts-ignore
  autoLoadEntities: true,
  migrationsTableName: 'api_migrations',
});
