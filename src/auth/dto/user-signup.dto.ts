import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MinLength, Validate } from "class-validator";
import { Companies } from "utility/common/companies.enum";
import { Match } from "utility/decorators/match.decorator";

export class UserSignUpDto {
    @IsNotEmpty({ message: 'First Name cannot be empty.' })
    @IsString({ message: 'First Name should be string.' })
    firstName: string;

    @IsNotEmpty({ message: 'Last Name cannot be empty.' })
    @IsString({ message: 'Last Name should be string.' })
    lastName: string;

    @IsNotEmpty({ message: 'Email can not be empty.' })
    @IsEmail({}, { message: 'Please enter a valid email.' })
    email: string;

    @IsNotEmpty({ message: 'Company name cannot be empty.' })
    @IsEnum(Companies, { message: 'Company must be one of the predefined companies.' })
    companyName: Companies;

    @IsNotEmpty({ message: 'Address Line 1 cannot be empty.' })
    @IsString({ message: 'Address Line 1 should be string.' })
    addressLineOne: string;

    @IsOptional()
    @IsString({ message: 'Address Line 2 should be string.' })
    addressLineTwo?: string;

    @IsNotEmpty({ message: 'City cannot be empty.' })
    @IsString({ message: 'City should be string.' })
    city: string;

    @IsNotEmpty({ message: 'Country cannot be empty.' })
    @IsString({ message: 'Country should be string.' })
    country: string;

    @IsStrongPassword({}, { message: 'Please enter a strong password' })
    @IsNotEmpty({ message: 'Password can not be empty.' })
    @MinLength(5, { message: 'Password minimum character should be 5' })
    password: string;

    @IsNotEmpty({ message: 'Confirm Password cannot be empty.' })
    @Validate(Match, ['password'], { message: 'Passwords do not match' })
    confirmPassword: string;
}
