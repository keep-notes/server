import { draftResolvers } from '@/resolvers/draft.resolvers';
import { mutationResolvers } from '@/resolvers/mutation.resolvers';
import { noteResolvers } from '@/resolvers/note.resolvers';
import { queryResolvers } from '@/resolvers/query.resolvers';
import { userResolvers } from '@/resolvers/user.resolvers';
import { ApolloContext } from '@/types/apollo.types';
import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';

export const server = new ApolloServer<ApolloContext>({
    typeDefs: readFileSync('./src/schema.graphql', { encoding: 'utf-8' }),
    resolvers: {
        Query: queryResolvers,
        Mutation: mutationResolvers,
        User: userResolvers,
        Note: noteResolvers,
        Draft: draftResolvers,
    },
});
