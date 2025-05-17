import { Controller, Get, Param } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Get('/:id/suppliers')
    async getCompanySuppliers(@Param('id') companyId: number) {
        return this.companyService.getSuppliersByCompanyId(companyId);
    }

    @Get('/:id/supplier-risks')
    getSupplierRisksByCompany(@Param('id') companyId: number) {
        return this.companyService.getSupplierRiskLevelsByCompany(companyId);
    }

    @Get('/supplier/:id/risk-details')
    getSingleSupplierDetails(@Param('id') supplierId: number) {
        return this.companyService.getSupplierRiskDetailsById(supplierId);
    }

    @Get(':id/supplier-risk-points')
    getSupplierPointsByCompany(@Param('id') companyId: number) {
        return this.companyService.getSupplierRiskPointsByCompany(companyId);
    }
}
