import { DataSource } from 'typeorm';
import { User } from './app/users-module';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [User],
});
