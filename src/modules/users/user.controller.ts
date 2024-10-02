import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserControllers {
  constructor(private userService: UserService) {}
  @Get()
  findAll(): string {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOne(): string {
    return this.userService.findOne();
  }

  @Delete('/:id')
  remove(): string {
    return this.userService.remove();
  }

  @Post()
  create(): string {
    return this.userService.create();
  }

  @Put('/:id')
  update(): string {
    return this.userService.update();
  }
}
