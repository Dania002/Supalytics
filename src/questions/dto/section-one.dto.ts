import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EmployeeCount } from "utility/common/employeeCount .enum";

export class SectionOneDto {
    @IsNotEmpty({ message: 'Company  Name cannot be empty.' })
    @IsString({ message: 'Company Name should be string.' })
    companyName: string;

    @IsNotEmpty({ message: 'Business Address cannot be empty.' })
    @IsString({ message: 'Business Address should be string.' })
    businessAddress: string;

    @IsNotEmpty({ message: 'City cannot be empty.' })
    @IsString({ message: 'City should be string.' })
    city: string;

    @IsNotEmpty({ message: 'Postal Code cannot be empty.' })
    @IsString({ message: 'Postal Code should be string.' })
    postalCode: string;

    @IsNotEmpty({ message: 'Country cannot be empty.' })
    @IsString({ message: 'Country should be string.' })
    country: string;

    @IsNotEmpty({ message: 'Company Website cannot be empty.' })
    @IsString({ message: 'Company Website should be string.' })
    companyWebsite: string;

    @IsNotEmpty({ message: 'Primary Contact Name cannot be empty.' })
    @IsString({ message: 'Primary Contact Name should be string.' })
    primaryContactName: string;

    @IsNotEmpty({ message: 'Primary Contact Email cannot be empty.' })
    @IsString({ message: 'Primary Contact Email should be string.' })
    primaryContactEmail: string;

    @IsNotEmpty({ message: 'Primary Contact Phone Number cannot be empty.' })
    @IsString({ message: 'Primary Contact Phone Number should be string.' })
    primaryContactPhoneNumber: string;

    @IsNotEmpty({ message: 'Nature Of Services Provided cannot be empty.' })
    @IsString({ message: 'Nature Of Services Provided should be string.' })
    natureOfServicesProvided: string;

    @IsNotEmpty({ message: 'Number Of Employees cannot be empty.' })
    @IsEnum(EmployeeCount, { message: 'Number Of Employees must be one of the 123....' })
    numberOfEmployees: EmployeeCount;

    @IsNotEmpty({ message: 'Established cannot be empty.' })
    @IsString({ message: 'Established should be string.' })
    established: string;

    @IsNotEmpty({ message: 'Certifications cannot be empty.' })
    @IsString({ message: 'Certifications should be string.' })
    certifications: string;
}
