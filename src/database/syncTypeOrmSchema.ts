import { AppDataSource, createTypeOrmClientConnection, getDataBaseConfig } from './TypeOrmClient';

async function syncTypeOrmSchema() {
  const config = getDataBaseConfig();

  await createTypeOrmClientConnection();

  AppDataSource.synchronize();

  await AppDataSource.destroy();
}

(async () => {
  await syncTypeOrmSchema();
})();
