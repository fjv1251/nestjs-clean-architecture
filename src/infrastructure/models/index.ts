import { Connection } from 'mongoose';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '@constants';
import { UserSchema } from './user.model';

export const modelProviders = [{
  provide: USER_MODEL_PROVIDER,
  useFactory: (connection: Connection) => connection.model('User', UserSchema),
  inject: [DB_PROVIDER],
}];
