import { knx } from 'src/connections/CreateKnexConnectios';

export const GetAllUsers = async () => {
  const getAllUsers = await knx('users');
  return getAllUsers;
};
