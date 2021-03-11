import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SharedModule } from 'src/shared/shared.module';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [LocalStrategy, JwtStrategy],
  imports: [
    PassportModule,
    SharedModule
  ]
})
export class AuthModule { }
