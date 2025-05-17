import { CompanyEntity } from "src/company/entity/company.entity";
import { DataSource } from "typeorm";
import { Companies } from "utility/common/companies.enum";

export const seedCompanies = async (dataSource: DataSource) => {
    const companyRepo = dataSource.getRepository(CompanyEntity);

    const values = Object.values(Companies);

    for (const name of values) {
        const exists = await companyRepo.findOne({ where: { name } });
        if (!exists) {
            const company = companyRepo.create({ name });
            await companyRepo.save(company);
        }
    }

    console.log('✅ Companies seeded!');
};
