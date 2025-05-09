import { IsEnum, IsNotEmpty } from "class-validator";
import { Favorable } from "utility/common/favorable.enum";
import { YesNo } from "utility/common/yesno.enum";

export class SectionSevenDto {
    @IsNotEmpty({ message: 'Favorable field is required.' })
    @IsEnum(Favorable, { message: 'Invalid value for favorable.' })
    favorable: Favorable;

    @IsNotEmpty({ message: 'Organize field is required.' })
    @IsEnum(YesNo, { message: 'Invalid value for organize.' })
    organize: YesNo;
}
