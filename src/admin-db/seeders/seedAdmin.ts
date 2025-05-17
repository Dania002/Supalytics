import { Roles } from 'utility/common/roles.enum';
import * as bcrypt from 'bcrypt';
import { AdminEntity } from '../entities/admin.entity';
import { DataSource } from 'typeorm';

export async function seedAdmin(dataSource: DataSource) {
  try {
    const adminRepository = dataSource.getRepository(AdminEntity);

    const existingAdmin = await adminRepository.findOneBy({
      email: 'admin@example.com',
    });

    if (existingAdmin) {
      console.log('⚠️ Admin already exists.');
      return;
    }

    const hashedPassword = await bcrypt.hash('Admin@123', 10);

    const admin = adminRepository.create({
      firstName: 'Super',
      lastName: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: Roles.ADMIN,
    });

    await adminRepository.save(admin);
    console.log('✅ Admin user created successfully.');
  } catch (error) {
    console.error('❌ Failed to seed admin:', error);
  }
}
