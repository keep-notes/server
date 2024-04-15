import { NoteResolvers } from '@/generated/graphql';
import { userRepository } from '@/repository/user.repository';

export const noteResolvers: NoteResolvers = {
    user(parent) {
        return userRepository.findByNote(parent);
    },
};
