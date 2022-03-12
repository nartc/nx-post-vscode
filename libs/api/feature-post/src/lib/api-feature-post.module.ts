import { Module } from '@nestjs/common';
import { ApiDataAccessPostModule } from '@nx-post-vscode/api/data-access-post';

@Module({
  imports: [ApiDataAccessPostModule],
})
export class ApiFeaturePostModule {}
