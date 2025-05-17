import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { UserEntity } from 'src/auth/entities/user.entity';
import { CompanyEntity } from 'src/company/entity/company.entity';
import { evaluateSectionRisk } from 'src/questions/risk-maps/evaluateRisk';
import { sectionTwoRiskMap } from 'src/questions/risk-maps/sectionTwo-risk.map';
import { Repository } from 'typeorm';
import { Roles } from 'utility/common/roles.enum';

@Injectable()
export class AdminDbService {
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyRepository: Repository<CompanyEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async findAll(): Promise<CompanyEntity[]> {
        const company = this.companyRepository.find();
        if (!company) throw new error("no companies!");
        return company;
    }

    async countSuppliersInCompany(companyId: number): Promise<number> {
        return this.userRepository.count({
            where: {
                company: { id: companyId },
                role: Roles.SUPLIER,
            },
        });
    }

    async countSuppliersWithHighRiskByCompany(): Promise<
        { companyId: number; companyName: string; highRiskSupplierCount: number }[]
    > {
        const suppliers = await this.userRepository.find({
            where: { role: Roles.SUPLIER },
            relations: ['company', 'sectionTwo'],
        });

        const companyHighRiskCountMap = new Map<number, { companyName: string; count: number }>();

        for (const supplier of suppliers) {
            const section = supplier.sectionTwo?.[0];
            if (!section || !supplier.company) continue;

            const risk = evaluateSectionRisk(section, sectionTwoRiskMap);

            if (risk === 'high') {
                const companyId = supplier.company.id;
                const companyName = supplier.company.name;

                if (!companyHighRiskCountMap.has(companyId)) {
                    companyHighRiskCountMap.set(companyId, { companyName, count: 1 });
                } else {
                    companyHighRiskCountMap.get(companyId)!.count++;
                }
            }
        }

        return Array.from(companyHighRiskCountMap.entries()).map(([companyId, data]) => ({
            companyId,
            companyName: data.companyName,
            highRiskSupplierCount: data.count,
        }));
    }

}
