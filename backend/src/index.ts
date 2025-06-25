import { createServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

async function main(): Promise<void> {
  const app: Express = express();
  const httpServer = createServer(app);
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: '*', // Or use specific origin for production
    },
  });

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  io.on('connection', (socket: Socket) => {
    console.log('✅ New client connected');

    socket.on('joinEvent', (data) => {
      console.log('User joined with token:', data.token);
      io.emit('userJoined', `Token ${data.token} has joined the event.`);
    });
    

    socket.on('disconnect', () => {
      console.log('❌ Client disconnected');
    });
  });

  const PORT = 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

main().catch((err: Error) => {
  console.error('❌ Failed to start server:', err);
});
