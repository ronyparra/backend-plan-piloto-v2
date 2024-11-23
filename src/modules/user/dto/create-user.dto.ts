import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'rony' })
  username: string;

  @ApiProperty({ example: '123456' })
  password: string;

  @ApiProperty({ example: 'rony@test.com' })
  email: string;

  @ApiProperty({ example: 'Rony' })
  name: string;

  @ApiProperty({ example: 1 })
  roleId: number;

  @ApiProperty({ example: 'Parra' })
  lastname: string;
}
