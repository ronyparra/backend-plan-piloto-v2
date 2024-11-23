import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RoleService } from '../role/role.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
  ) {}

  @Post()
  signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto.email, authDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const role = await this.roleService.findOne(req.user.roleId);
    return {
      ...req.user,
      role,
    };
  }
}
