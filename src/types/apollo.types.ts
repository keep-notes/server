import { User } from '@/generated/graphql';

export interface ApolloContext {
  auth: User | null;
}
