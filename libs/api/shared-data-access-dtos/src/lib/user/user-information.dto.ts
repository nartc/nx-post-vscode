import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserInformationDto {
  @AutoMap()
  @ApiProperty()
  id!: string;

  @AutoMap()
  @ApiProperty()
  username!: string;

  @AutoMap()
  @ApiProperty()
  email!: string;

  @AutoMap()
  @ApiPropertyOptional()
  name?: string;

  @AutoMap()
  @ApiPropertyOptional()
  avatarUrl?: string;

  @AutoMap()
  @ApiPropertyOptional()
  bio?: string;

  @AutoMap()
  @ApiPropertyOptional()
  location?: string;
}
