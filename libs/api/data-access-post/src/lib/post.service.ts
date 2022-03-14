import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { QueryOrder, Reference } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '@nx-post-vscode/api/data-access-user';
import { PostDto } from '@nx-post-vscode/api/shared-data-access-dtos';
import {
  PostEntity,
  UserEntity,
} from '@nx-post-vscode/api/shared-data-access-entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: EntityRepository<PostEntity>,
    @InjectMapper() private mapper: Mapper,
    private userService: UserService
  ) {}

  async findPosts(): Promise<PostDto[]> {
    try {
      const posts = await this.postRepository.findAll({
        orderBy: { createdAt: QueryOrder.DESC },
        limit: 25,
        populate: ['author', 'comments', 'likedBy'],
      });

      return this.mapper.mapArray(posts, PostDto, PostEntity);
    } catch (e) {
      throw new InternalServerErrorException({ e }, 'failed - find all posts');
    }
  }

  async findPostDetail(postId: string): Promise<PostDto> {
    try {
      const post = await this.postRepository.findOneOrFail(
        { id: postId },
        { populate: ['author', 'comments', 'comments.author', 'likedBy'] }
      );
      return this.mapper.map(post, PostDto, PostEntity);
    } catch (e) {
      throw new InternalServerErrorException(
        { e, postId },
        'failed - find post id'
      );
    }
  }

  async createPost(userId: string, text: string): Promise<PostDto> {
    try {
      const newPost = this.postRepository.create({
        text,
        author: Reference.createFromPK(UserEntity, userId),
      });
      await this.postRepository.persistAndFlush(newPost);
      return this.mapper.map(newPost, PostDto, PostEntity);
    } catch (e) {
      throw new InternalServerErrorException(
        { e, userId, text },
        'failed - create post'
      );
    }
  }

  async deletePost(userId: string, postId: string): Promise<void> {
    const post = await this.postRepository.findOneOrFail({ id: postId });

    if (post == null) {
      throw new NotFoundException({ postId }, 'failed - no post');
    }

    if (post.author.id !== userId) {
      throw new ForbiddenException(
        { userId, postId },
        'failed - no permission to delete post'
      );
    }

    try {
      await this.postRepository.removeAndFlush(post);
    } catch (e) {
      throw new InternalServerErrorException(
        { e, userId, postId },
        'failed - delete post'
      );
    }
  }

  async like(userId: string, postId: string): Promise<PostDto> {
    const user = await this.userService.findById(userId);

    if (user == null) {
      throw new NotFoundException({ userId }, 'failed - no user');
    }

    const post = await this.postRepository.findOneOrFail(
      { id: postId },
      { populate: ['author', 'comments', 'likedBy'] }
    );

    if (post == null) {
      throw new NotFoundException({ postId }, 'failed - no post');
    }

    try {
      post.likedBy.add(user);
      await this.postRepository.flush();
      return this.mapper.map(post, PostDto, PostEntity);
    } catch (e) {
      throw new InternalServerErrorException(e, 'failed - like post');
    }
  }

  async unlike(userId: string, postId: string): Promise<PostDto> {
    const user = await this.userService.findById(userId);

    if (user == null) {
      throw new NotFoundException({ userId }, 'failed - no user');
    }

    const post = await this.postRepository.findOneOrFail(
      { id: postId },
      { populate: ['author', 'comments', 'likedBy'] }
    );

    if (post == null) {
      throw new NotFoundException({ postId }, 'failed - no post');
    }

    try {
      post.likedBy.remove(user);
      await this.postRepository.flush();
      return this.mapper.map(post, PostDto, PostEntity);
    } catch (e) {
      throw new InternalServerErrorException(e, 'failed - unlike post');
    }
  }
}
