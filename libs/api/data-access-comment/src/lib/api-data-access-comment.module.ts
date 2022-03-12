import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CommentEntity } from '@nx-post-vscode/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([CommentEntity])],
})
export class ApiDataAccessCommentModule {}
