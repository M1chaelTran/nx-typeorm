import { Injectable } from '@nestjs/common';
import { UsersService } from './users-module';

@Injectable()
export class AppService {
  constructor(private userService: UsersService) {}
  async getData(): Promise<any> {
    const user = await this.userService.findOne('1');
    return { message: 'Welcome to api!', user };
  }
}
