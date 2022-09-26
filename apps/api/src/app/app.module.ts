import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users-module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'password',
    //   database: 'postgres',
    //   autoLoadEntities: true,
    //   // synchronize: true,
    // }),
    DbModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
