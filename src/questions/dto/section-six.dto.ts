import { IsEnum, IsNotEmpty } from "class-validator";
import { Hours } from "utility/common/hours.enum";
import { Raise } from "utility/common/raise.enum";

export class SectionSixDto {
    @IsNotEmpty({ message: 'Hours field is required.' })
    @IsEnum(Hours, { message: 'Invalid value for hours.' })
    hours: Hours;

    @IsNotEmpty({ message: 'Raise field is required.' })
    @IsEnum(Raise, { message: 'Invalid value for raise.' })
    raise: Raise;
}
