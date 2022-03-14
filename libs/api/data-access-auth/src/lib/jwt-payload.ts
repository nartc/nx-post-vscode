import { UserRole } from '@nx-post-vscode/api/shared-data-access-entities';

export interface JwtPayload {
  email: string;
  username: string;
  role: UserRole;
}
