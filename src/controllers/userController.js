import UserSchema from './../models/userSchema.js';

export const createNewUser = async (payload) => {
  try {
    const { firstName, lastName, email, password, phone, profileImage, address } = payload;
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
        profileImage,
        address,
      });
      if (newUser) {
        return {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          phone: newUser.phone,
          profileImage: newUser.profileImage,
          address: newUser.address,
        };
      } else {
        throw new Error('Invalid user details.');
      }
    } else {
      throw new Error('Email is already in use.');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUsers = async () => {
  return await UserSchema.find();
};
