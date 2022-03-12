import { Module } from '@nestjs/common';
import { ApiDataAccessUserModule } from '@nx-post-vscode/api/data-access-user';

@Module({
  imports: [ApiDataAccessUserModule],
})
export class ApiFeatureUserModule {}
