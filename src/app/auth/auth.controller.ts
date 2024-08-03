import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCheckReq } from './dtos/user.req';
import { CheckUsernameQuery } from './queries/impl/checkUsername.handler';
import { QueryBus } from '@nestjs/cqrs';
import { toArray } from 'rxjs';

@Controller('auth')
export class AppController {
  constructor(
    private readonly queryBus: QueryBus
  ) {}

  @Post('request_otp_forgot_password')
  async forgotPasswordRequest(
    @Body() req: UserCheckReq
  ) {
    const checkUsername = await this.queryBus.execute(new CheckUsernameQuery(req));
    if (checkUsername.length === 0) {
      return {
        status: 400,
        message: "Username not found"
      }
    }

    return {
      status: 200,
      message: "OK",
      data: checkUsername
    }
  }
}
