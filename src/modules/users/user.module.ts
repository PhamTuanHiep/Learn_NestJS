import { Module } from '@nestjs/common';
import { UserControllers } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/enities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UserControllers],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
