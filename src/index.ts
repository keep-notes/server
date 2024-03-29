import { User } from '@/generated/graphql';
import UserModel from '@/user/user.model';
import UserService from '@/user/user.service';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import * as mongoose from 'mongoose';

interface ApolloContext {
  auth: User | null;
}

const userService = new UserService();

const server = new ApolloServer<ApolloContext>({
  typeDefs: readFileSync('./src/schema.graphql', { encoding: 'utf-8' }),
  resolvers: {
    Query: {
      authUser(_, __, context) {
        return context.auth;
      }
    },
    Mutation: {
      async register(_, args) {
        return userService.createUser(args.user);
      },
      async login(_, args) {
        return userService.login(args.credentials);
      },
    },
  },
});

!async function startServer() {
  await mongoose.connect(process.env.MONGO_URI!);
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      let user = null;
      const token = req.headers.authorization;
      if (token) {
        user = await UserModel.findOne({ email: 'oreadeleye67@gmail.com' }).exec();
      }
      return { auth: user };
    },
  });
  console.log(`🚀  Server ready at: ${ url }`);
}();
