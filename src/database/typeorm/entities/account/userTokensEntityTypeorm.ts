import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserTokensEntity } from '../../../../domain/modules/accounts/entities/userTokensEntity';
import { UserEntityTypeorm } from './userEntityTypeorm';
import { randomUUID } from 'crypto';

@Entity('users_tokens')
export class UserTokensEntityTypeorm extends UserTokensEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  user_id: string;

  @ManyToOne(() => UserEntityTypeorm)
  @JoinColumn({ name: 'user_id' })
  user: UserEntityTypeorm;

  @Column()
  expires_date: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
