import User, { IUser } from "../models/user.model";

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  return await User.create(data);
};

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};
