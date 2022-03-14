import { Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { BaseDto } from '@nx-post-vscode/api/shared-data-access-dtos';
import { BaseEntity } from '@nx-post-vscode/api/shared-data-access-entities';

@Injectable()
export class BaseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      mapper.createMap(BaseEntity, BaseDto);
    };
  }
}
