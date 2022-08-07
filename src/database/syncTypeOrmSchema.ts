import { AppDataSource, createTypeOrmClientConnection, getDataBaseConfig } from './TypeOrmClient';

async function syncTypeOrmSchema() {
  //await createTypeOrmClientConnection();

  AppDataSource.synchronize();

  await AppDataSource.destroy();
}

(async () => {
  await syncTypeOrmSchema();
})();
