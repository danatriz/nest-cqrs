import { Module } from '@nestjs/common';
import { AppController } from './app/auth/auth.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    CqrsModule,
    AuthModule
  ],
  providers: [AuthModule],
  controllers: [AppController],
})
export class AppModule {}
