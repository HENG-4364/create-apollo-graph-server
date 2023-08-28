import { knx } from 'src/connections/CreateKnexConnectios';
import bcrypt from 'bcrypt';
import { UsersInput } from 'src/types/Users';

export const CreateUserMutation = async ( _,{input}: { input:UsersInput},{}
) => {
  const {username,email,password,fullaname}=input;
  const hashPassword = bcrypt.hashSync(password, 12);

  const [createUser] = await knx
    .table('users')
    .insert({ email,username, password: hashPassword,fullaname });

  if (createUser > 0) {
    return true;
  } else {
    return false;
  }
};
