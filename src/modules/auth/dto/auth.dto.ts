import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({ example: 'rony@test.com' })
  email: string;

  @ApiProperty({ example: '123456' })
  password: string;
}
