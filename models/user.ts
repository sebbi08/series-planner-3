import { Model, Schema, model, models } from 'mongoose';

export interface IUser {
    name: string,
    password: string,
    salt: string
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'name is required!'],
    },
    password: {
        type: String,
        required: [true, 'password is required!']
    },
    salt: {
        type: String,
        required: [true, 'salt is required!']
    }
},{
    collection : "Users"
});

const User = models?.User as Model<IUser> || model<IUser>("User", UserSchema);

export default User;