import { startApollo } from '@/apollo/start';
import * as mongoose from 'mongoose';

!async function startServer() {
  await mongoose.connect(process.env.MONGO_URI!);
  const url = await startApollo();
  console.log(`🚀  Server ready at: ${ url }`);
}();
