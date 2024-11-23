import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import configuration from 'src/config/configuration';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    JwtModule.register({
      global: true,
      secret: configuration().jwt.secret,
      signOptions: { expiresIn: '3d' },
    }),
    UserModule,
    RoleModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
