import { createTypeOrmClientConnection } from '../database/TypeOrmClient';

import { Server } from './server';

(async () => {
  console.log('Init: connection of TypeOrm for api');
  await createTypeOrmClientConnection();

  console.log('Init: Server...');
  const server = new Server();
  server.listen();
})();
