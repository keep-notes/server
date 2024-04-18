import { UserResolvers } from '@/generated/graphql';
import { noteRepository } from '@/repository/note.repository';

export const userResolvers: UserResolvers = {
    archived(parent) {
        return noteRepository.userArchivedNotes(parent._id);
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
