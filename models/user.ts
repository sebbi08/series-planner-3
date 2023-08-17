import { InferSchemaType, Model, Schema, model, models } from 'mongoose';



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
},{
    collection : "Users"
});

export type IUser = InferSchemaType<typeof UserSchema>

const User = models?.User as Model<IUser> || model<IUser>("User", UserSchema);

export default User;