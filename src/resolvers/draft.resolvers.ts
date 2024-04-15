import { DraftResolvers } from '@/generated/graphql';
import { userRepository } from '@/repository/user.repository';

export const draftResolvers: DraftResolvers = {
    user(parent) {
        return userRepository.findByDraft(parent);
    },
};
