import { NoteResolvers } from '@/generated/graphql';
import UserRepository from '@/repository/user.repository';

const userRepo = new UserRepository();

export const noteResolvers: NoteResolvers = {
    user(parent) {
        return userRepo.findByNote(parent);
    },
};
