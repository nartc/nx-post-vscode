import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserEntity } from '@nx-post-vscode/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
})
export class ApiDataAccessUserModule {}
