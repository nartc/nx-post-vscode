import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { PostEntity } from '@nx-post-vscode/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([PostEntity])],
})
export class ApiDataAccessPostModule {}
