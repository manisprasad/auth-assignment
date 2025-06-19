import {Document, model, Schema} from "mongoose";
import { string } from "zod";


export interface UserAttrs {
    fullName: string;
    email: string;
    password: string;
    refreshToken: string[];
}

export interface UserDoc extends Document, UserAttrs {}

//Schema of User
const UserSchema = new Schema<UserDoc>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    refreshToken: {type: [String], default: []}
  },    
  { timestamps: true }
);


export const User = model<UserDoc>("User", UserSchema);
