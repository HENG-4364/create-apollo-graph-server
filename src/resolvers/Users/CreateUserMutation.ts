import { knx } from 'src/connections/CreateKnexConnectios';
import bcrypt from 'bcrypt';

export const CreateUserMutation = async (
  _,
  { username, password }: { username: string; password: string },
  {}
) => {
  const hashPassword = bcrypt.hashSync(password, 12);

  const [createUser] = await knx
    .table('users')
    .insert({ username, password: hashPassword });

  if (createUser > 0) {
    return true;
  } else {
    return false;
  }
};
