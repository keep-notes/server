import context from '@/apollo/context';
import { server } from '@/apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as mongoose from 'mongoose';

!async function startServer() {
    await mongoose.connect(process.env.MONGO_URI!);
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context,
    });
    console.log(`🚀  Server ready at: ${ url }`);
}();
