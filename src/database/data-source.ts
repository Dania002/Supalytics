import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { seedCompanies } from 'src/company/seeders/companyseeder';
import { seedAdmin } from 'src/admin-db/seeders/seedAdmin';

config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: true
})

AppDataSource.initialize()
  .then(async () => {
    console.log('Starting seed...');
    await seedCompanies(AppDataSource);
    await seedAdmin(AppDataSource);
    console.log('Seed completed!');
    await AppDataSource.destroy();
  })
  .catch((err) => {
    console.error('Error during seeding', err);
    AppDataSource.destroy();
  });

export default AppDataSource;