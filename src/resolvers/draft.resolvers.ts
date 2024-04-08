import { DraftResolvers } from '@/generated/graphql';
import UserRepository from '@/repository/user.repository';

const userRepo = new UserRepository();

export const draftResolvers: DraftResolvers = {
    user(parent) {
        return userRepo.findByDraft(parent);
    },
};
