import UserSchema from './../models/userSchema.js';
import jwt from 'jsonwebtoken';

export const authUser = async (payload) => {
  const { password, email } = payload;
  const user = await UserSchema.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    return token;
  } else {
    throw new Error('Invalid email or password.');
  }
};

export const decodeJWTToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
