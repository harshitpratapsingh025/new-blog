import * as UserService from './../../controllers/userController.js';
import * as AuthService from './../../controllers/authController.js';

const queries = {
  getAllUsers: async (_, __, context) => {
    return await UserService.getAllUsers();
  },
  getUserToken: async (_, payload) => {
    return await AuthService.authUser(payload);
  },
};

const mutations = {
  createUser: async (_, payload, context) => {
    return await UserService.createNewUser(payload);
  },
};

export const resolvers = { queries, mutations };
