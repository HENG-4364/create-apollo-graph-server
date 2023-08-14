import { knx } from 'src/connections/CreateKnexConnectios';

export const RemoveProduct = async (_, { id }: { id: number }, {}) => {
  const removeProduct = await knx('products').del().where({ id });
  if (removeProduct) {
    return true;
  } else {
    return false;
  }
};
