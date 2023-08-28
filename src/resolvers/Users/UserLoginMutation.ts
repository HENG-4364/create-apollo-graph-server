import { knx } from 'src/connections/CreateKnexConnectios';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

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
    const token = jwt.sign({ id: user.id, username: user.username }, '123');
    return token;
  } else {
    throw new GraphQLError(`Username or password is incorrect`);
  }
};
