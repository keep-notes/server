import { UserResolvers } from '@/generated/graphql';
import NoteRepository from '@/repository/note.repository';

const noteRepo = new NoteRepository();

export const userResolvers: UserResolvers = {
    notes(parent) {
        return noteRepo.userNotes(parent._id);
    },
};
