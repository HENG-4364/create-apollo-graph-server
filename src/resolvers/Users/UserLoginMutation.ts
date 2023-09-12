import { knx } from 'src/connections/CreateKnexConnectios';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

export const UserLoginMutation = async (
  _,
  { email, password }: { email: string; password: string },
  {}
) => {
  const user = await knx.table('users').where({ email }).first();

  if (!user) {
    throw new GraphQLError(`Username or password is incorrect`);
  }

  const verified = bcrypt.compareSync(password, user.password);

  if (verified) {
    const token = jwt.sign({ id: user.id, email: user.email }, '123');
    return token;
  } else {
    throw new GraphQLError(`Username or password is incorrect`);
  }
};
