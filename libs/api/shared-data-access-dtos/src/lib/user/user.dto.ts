import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '@nx-post-vscode/api/shared-data-access-entities';
import { BaseDto } from './../base.dto';
import { CommentDto } from './../comment/comment.dto';
import { PostDto } from './../post/post.dto';

export class UserDto extends BaseDto {
  @AutoMap()
  @ApiProperty()
  username!: string;

  @AutoMap()
  @ApiProperty()
  email!: string;

  @AutoMap({ typeFn: () => String })
  @ApiProperty({ enum: () => UserRole, enumName: 'UserRole' })
  role!: UserRole;

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

  @AutoMap({ typeFn: () => PostDto })
  @ApiProperty({ type: PostDto, isArray: true })
  posts: PostDto[] = [];

  @AutoMap({ typeFn: () => PostDto })
  @ApiProperty({ type: PostDto, isArray: true })
  liked: PostDto[] = [];

  @AutoMap({ typeFn: () => CommentDto })
  @ApiProperty({ type: CommentDto, isArray: true })
  comments: CommentDto[] = [];
}
