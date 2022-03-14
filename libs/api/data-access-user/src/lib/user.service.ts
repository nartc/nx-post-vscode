import { EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterParamsDto } from '@nx-post-vscode/api/shared-data-access-dtos';
import { UserEntity } from '@nx-post-vscode/api/shared-data-access-entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: EntityRepository<UserEntity>
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findOneOrFail({ username });
    } catch (e) {
      throw new InternalServerErrorException(
        { e, username },
        'failed - find by username'
      );
    }
  }

  async create(dto: RegisterParamsDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(dto);
      await this.userRepository.persistAndFlush(newUser);
      return newUser;
    } catch (e) {
      throw new InternalServerErrorException(e, 'failed - create user');
    }
  }
}
