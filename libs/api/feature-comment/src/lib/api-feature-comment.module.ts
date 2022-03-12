import { Module } from '@nestjs/common';
import { ApiDataAccessCommentModule } from '@nx-post-vscode/api/data-access-comment';

@Module({
  imports: [ApiDataAccessCommentModule],
})
export class ApiFeatureCommentModule {}
