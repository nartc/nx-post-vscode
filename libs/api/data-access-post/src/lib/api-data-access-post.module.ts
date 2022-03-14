import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ApiDataAccessUserModule } from '@nx-post-vscode/api/data-access-user';
import { PostEntity } from '@nx-post-vscode/api/shared-data-access-entities';
import { PostService } from './post.service';

@Module({
  imports: [MikroOrmModule.forFeature([PostEntity]), ApiDataAccessUserModule],
  providers: [PostService],
  exports: [PostService],
})
export class ApiDataAccessPostModule {}
