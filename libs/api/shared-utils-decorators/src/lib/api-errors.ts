import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ApiExceptionDto } from '@nx-post-vscode/api/shared-data-access-dtos';

export function ApiErrors() {
  return applyDecorators(
    ApiBadRequestResponse({
      type: ApiExceptionDto,
      description: 'Bad Request',
    }),
    ApiNotFoundResponse({ type: ApiExceptionDto, description: 'Not Found' }),
    ApiInternalServerErrorResponse({
      type: ApiExceptionDto,
      description: 'Internal Server Error',
    }),
    ApiUnauthorizedResponse({
      type: ApiExceptionDto,
      description: 'Unauthorized',
    }),
    ApiForbiddenResponse({ type: ApiExceptionDto, description: 'Forbidden' })
  );
}
