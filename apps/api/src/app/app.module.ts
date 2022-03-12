import { CamelCaseNamingConvention } from '@automapper/core';
import { mikro } from '@automapper/mikro';
import { AutomapperModule } from '@automapper/nestjs';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ApiFeatureCommentModule } from '@nx-post-vscode/api/feature-comment';
import { ApiFeatureConfigModule } from '@nx-post-vscode/api/feature-config';
import { ApiFeaturePostModule } from '@nx-post-vscode/api/feature-post';
import { ApiFeatureUserModule } from '@nx-post-vscode/api/feature-user';
import { DbConfig, dbConfig } from '@nx-post-vscode/api/utils-config';

@Module({
  imports: [
    AutomapperModule.forRoot({
      singular: true,
      options: [
        {
          name: 'mapper',
          pluginInitializer: mikro(),
          namingConventions: new CamelCaseNamingConvention(),
        },
      ],
    }),
    MikroOrmModule.forRootAsync({
      inject: [dbConfig.KEY],
      useFactory: (dbConfig: DbConfig) => ({
        dbName: dbConfig.dbName,
        clientUrl: dbConfig.uri,
        autoLoadEntities: true,
        type: 'mongo',
      }),
    }),
    ApiFeatureConfigModule,
    ApiFeatureUserModule,
    ApiFeaturePostModule,
    ApiFeatureCommentModule,
  ],
})
export class AppModule {}
