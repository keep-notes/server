import { Draft } from '@/generated/graphql';
import { model, Schema } from 'mongoose';

const schema = new Schema<Draft>(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        userId: {
            type: String,
            unique: true
        }
    },
    { timestamps: true },
);

export default model<Draft>('Draft', schema);
