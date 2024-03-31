import { QueryResolvers } from '@/generated/graphql';
import { GraphQLError } from 'graphql/error';

export const queryResolvers: QueryResolvers = {
    authUser(_, __, context) {
        if (!context.auth)
            throw new GraphQLError('Unauthorized');
        return context.auth;
    },
};
