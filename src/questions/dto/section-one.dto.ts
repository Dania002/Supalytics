import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobCategory } from 'utility/common/jobCategory.enum';
import { Clients } from 'utility/common/clients.enum';
import { WRO } from 'utility/common/wro.enum';

export class SectionOneDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    jobTitle: string;

    @IsNotEmpty()
    @IsEnum(JobCategory)
    jobCategory: JobCategory;

    @IsNotEmpty()
    @IsEnum(Clients)
    clients: Clients;

    @IsOptional()
    @IsString()
    registeredName?: string;

    @IsOptional()
    @IsString()
    licensingScheme?: string;

    @IsOptional()
    @IsString()
    licenseNumber?: string;

    @IsOptional()
    @IsString()
    licenseExpiryDate?: string;

    @IsOptional()
    @IsString()
    additionalCertification?: string;

    @IsOptional()
    @IsString()
    certificationNumber?: string;

    @IsOptional()
    @IsString()
    certificationExpiryDate?: string;

    @IsNotEmpty()
    @IsEnum(WRO)
    wro: WRO;
}
