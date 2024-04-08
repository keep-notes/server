import { UserResolvers } from '@/generated/graphql';
import DraftRepository from '@/repository/draft.repository';
import NoteRepository from '@/repository/note.repository';

const noteRepo = new NoteRepository();
const draftRepo = new DraftRepository();

export const userResolvers: UserResolvers = {
    notes(parent) {
        return noteRepo.userNotes(parent._id);
    },
    draft(parent) {
        return draftRepo.userDraft(parent._id);
    },
};
