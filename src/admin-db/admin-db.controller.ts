import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AdminDbService } from './admin-db.service';
import { CompanyEntity } from 'src/company/entity/company.entity';

@Controller('admin-db')
export class AdminDbController {
    constructor(private readonly adminDbService: AdminDbService) { }

    @Get()
    async getAllCompanies(): Promise<CompanyEntity[]> {
        return this.adminDbService.findAll();
    }

    @Get('company/:id/suppliers-count')
    async getSuppliersCount(@Param('id', ParseIntPipe) companyId: number): Promise<{ count: number }> {
        const count = await this.adminDbService.countSuppliersInCompany(companyId);
        return { count };
    }

    @Get('companies/high-risk-suppliers-count')
    async getHighRiskSuppliersCountByCompany() {
        return this.adminDbService.countSuppliersWithHighRiskByCompany();
    }

}
