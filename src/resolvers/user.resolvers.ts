import { UserResolvers } from '@/generated/graphql';
import { draftRepository } from '@/repository/draft.repository';
import { noteRepository } from '@/repository/note.repository';

export const userResolvers: UserResolvers = {
    archived(parent) {
        return noteRepository.userArchivedNotes(parent._id);
    },
    draft(parent) {
        return draftRepository.userDraft(parent._id);
    },
    notes(parent, args) {
        return args.query
            ? noteRepository.search(args.query)
            : noteRepository.userActiveNotes(parent._id);
    },
    trashed(parent) {
        return noteRepository.userTrashedNotes(parent._id);
    },
};
