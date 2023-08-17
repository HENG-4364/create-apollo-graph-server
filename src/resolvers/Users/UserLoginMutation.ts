import { knx } from 'src/connections/CreateKnexConnectios';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

export const UserLoginMutation = async (
  _,
  { username, password }: { username: string; password: string },
  {}
) => {
  const user = await knx.table('users').where({ username }).first();

  if (!user) {
    throw new GraphQLError(`Username or password is incorrect`);
  }

  const verified = bcrypt.compareSync(password, user.password);

  if (verified) {
    return true;
  } else {
    return false;
  }
};
