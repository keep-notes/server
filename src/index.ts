import context from '@/apollo/context';
import { server } from '@/apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as mongoose from 'mongoose';

export async function startServer(port = 4000) {
    await mongoose.connect(process.env.MONGO_URI!);
    const { url } = await startStandaloneServer(server, {
        listen: { port },
        context,
    });
    console.log(`🚀  Server ready at: ${ url }`);

    return { server, url };
}

startServer();
