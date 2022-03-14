import { HttpStatus } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ApiExceptionDto {
  @ApiPropertyOptional()
  statusCode?: number;

  @ApiPropertyOptional()
  message?: string;

  @ApiPropertyOptional()
  status?: string;

  @ApiPropertyOptional()
  error?: string;

  @ApiPropertyOptional()
  errors?: unknown;

  @ApiPropertyOptional()
  timestamp?: string;

  constructor(
    message: string,
    error: string,
    errors: unknown,
    statusCode: number
  ) {
    this.message = message;
    this.error = error;
    this.errors = errors;
    this.statusCode = statusCode;
    this.status = HttpStatus[statusCode];
    this.timestamp = new Date().toISOString();
  }
}
