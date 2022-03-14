import { mapFrom, Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { BaseDto, PostDto } from '@nx-post-vscode/api/shared-data-access-dtos';
import {
  BaseEntity,
  PostEntity,
} from '@nx-post-vscode/api/shared-data-access-entities';

@Injectable()
export class PostProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      const baseMapping = mapper.getMapping(BaseEntity, BaseDto);
      mapper
        .createMap(PostEntity, PostDto, { extends: [baseMapping] })
        .forMember(
          (d) => d.commentsCount,
          mapFrom((s) => s.comments.length)
        )
        .forMember(
          (d) => d.likedByCount,
          mapFrom((s) => s.likedBy.length)
        );
    };
  }
}
