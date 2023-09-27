import { EntityBase } from './EntityBase';

export interface UserEntity extends EntityBase {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
