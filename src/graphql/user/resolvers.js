import * as UserService from './../../controllers/userController.js';

const queries = {
  getAllUsers: async () => {
    return await UserService.getAllUsers();
  },
};

const mutations = {
  createUser: async (_, payload) => {
    const res = await UserService.createNewUser(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };
