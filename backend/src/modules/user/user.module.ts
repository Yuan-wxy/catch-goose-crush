import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRecord } from '../../entities/user-record.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRecord])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
