import { User } from '@/generated/graphql';
import NoteRepository from '@/note/note.repository';
import NoteService from '@/note/note.service';
import UserService from '@/user/user.service';
import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { GraphQLError } from 'graphql/error';

interface ApolloContext {
  auth: User | null;
}

const userService = new UserService();
const noteService = new NoteService();
const noteRepo = new NoteRepository();

export const server = new ApolloServer<ApolloContext>({
  typeDefs: readFileSync('./src/schema.graphql', { encoding: 'utf-8' }),
  resolvers: {
    Query: {
      authUser(_, __, context) {
        if (!context.auth)
          throw new GraphQLError('Unauthorized');
        return context.auth;
      },
    },
    Mutation: {
      async register(_, args) {
        return userService.createUser(args.user);
      },
      async login(_, args) {
        return userService.login(args.credentials);
      },
      async addNote(_, args) {
        return noteService.addNote(args.note);
      },
      async editNote(_, args) {
        return noteService.editNote(args.noteId, args.edit);
      },
      async deleteNote(_, args) {
        return noteService.deleteNote(args.noteId);
      },
    },
    User: {
      notes(parent) {
        return noteRepo.userNotes(parent._id);
      },
    },
    Note: {
      user(parent) {
        return noteRepo.user(parent);
      },
    },
  },
});
