import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LoginParamsDto } from './login-params.dto';

export class RegisterParamsDto extends LoginParamsDto {
  @ApiProperty()
  email!: string;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  location?: string;

  @ApiPropertyOptional()
  avatarUrl?: string;
}
