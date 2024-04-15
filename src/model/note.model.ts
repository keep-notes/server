import { Note } from '@/generated/graphql';
import { model, Schema } from 'mongoose';

const schema = new Schema<Note>(
    {
        title: {
            type: String,
            index: true,
        },
        content: {
            type: String,
        },
        isPinned: {
            type: Boolean,
            default: false,
        },
        userId: {
            type: String,
        },
    },
    { timestamps: true },
);

export default model<Note>('Note', schema);
