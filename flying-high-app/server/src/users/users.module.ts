import { HttpModule, Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [HttpModule, SharedModule]
})
export class UsersModule { }
