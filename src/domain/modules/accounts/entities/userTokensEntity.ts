import { UserEntity } from './userEntity';

export class UserTokensEntity {
  id: string;

  refresh_token: string;

  user_id: string;

  user: UserEntity;

  expires_date: Date;

  created_at: Date;
}
