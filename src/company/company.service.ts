import { Injectable } from '@nestjs/common';
import { CompanyEntity } from './entity/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from 'utility/common/roles.enum';
import { QuestionsService } from 'src/questions/questions.service';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyRepository: Repository<CompanyEntity>,
        private readonly questionsService: QuestionsService,
    ) { }

    async getSuppliersByCompanyId(companyId: number) {
        return this.companyRepository
            .createQueryBuilder('company')
            .leftJoinAndSelect('company.users', 'user')
            .where('company.id = :companyId', { companyId })
            .andWhere('user.role = :role', { role: Roles.SUPLIER })
            .select(['user.firstName', 'user.lastName', 'user.email'])
            .getRawMany();
    }

    getSupplierRiskLevelsByCompany(companyId: number) {
        return this.questionsService.getSupplierRiskLevels(companyId);
    }

    getSupplierRiskDetailsById(supplierId: number) {
        return this.questionsService.getSupplierRiskDetailsById(supplierId);
    }

    getSupplierRiskPointsByCompany(companyId: number) {
        return this.questionsService.getSupplierRiskPointsByCompany(companyId);
    }
}