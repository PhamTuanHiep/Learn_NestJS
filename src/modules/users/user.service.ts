import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/enities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}
  findAll(): string {
    return 'Find all user';
  }

  findOne(): string {
    return 'Find oone user';
  }

  remove(): string {
    return 'Remove user';
  }

  create(): string {
    return 'Create user';
  }

  update(): string {
    return 'Update user';
  }
}
