import { IsEmail, IsNotEmpty } from "class-validator";

export class UserLogInDto {
    @IsNotEmpty({ message: 'Email can not be empty.' })
    @IsEmail({}, { message: 'Please enter a valid email.' })
    email: string;

    @IsNotEmpty({ message: 'Password can not be empty.' })
    password: string;
}
