import { server } from '@/apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as jwt from 'jsonwebtoken';

function initializeRootContext(authHeader?: string) {
  let user = null;
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET!,
      (_, payload: any) => user = payload?.user
    );
  }

  return { auth: user };
}

export async function startApollo() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      return initializeRootContext(req.headers.authorization);
    },
  });

  return url;
}
