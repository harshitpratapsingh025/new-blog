import UserSchema from './../models/userSchema.js';

export const createNewUser = async (payload) => {
  try {
    const { firstName, lastName, email, password, phone } = payload;
    const userExists = await UserSchema.findOne({
      email: email,
    });
    if (!userExists) {
      const newUser = await UserSchema.create({
        firstName,
        lastName,
        email,
        password,
        phone,
      });
      if (newUser) {
        return {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          phone: newUser.phone,
        };
      } else {
        throw new Error('Invalid user details.');
      }
    } else {
      throw new Error('Email is already in use.');
    }
  } catch (error) {
    throw new Error({
      message: error.message,
    });
  }
};

export const getAllUsers = async () => {
  return await UserSchema.find();
};
