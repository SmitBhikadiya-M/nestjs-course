import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  _id: string;
  username: string;
  password: string;
}
