import { UserResolvers } from '@/generated/graphql';
import { draftRepository } from '@/repository/draft.repository';
import { noteRepository } from '@/repository/note.repository';

export const userResolvers: UserResolvers = {
    notes(parent) {
        return noteRepository.userNotes(parent._id);
    },
    draft(parent) {
        return draftRepository.userDraft(parent._id);
    },
};
