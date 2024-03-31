import { User } from '@/generated/graphql';
import { model, Schema } from 'mongoose';

const schema = new Schema<User>(
    {
        name: {
            type: String,
            required: [true, 'Please enter a full name'],
            index: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
        },
        lastLogin: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true },
);

export default model<User>('User', schema);
