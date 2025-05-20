import { IsEnum, IsNotEmpty } from "class-validator";
import { Compliance } from "utility/common/compliance.enum";
import { Environmental } from "utility/common/environmental.enum";
import { YesNo } from "utility/common/yesno.enum";
import { YesNoCopy } from "utility/common/yesnocopy.enum";

export class SectionEightDto {
    @IsNotEmpty({ message: 'Impact field is required.' })
    @IsEnum(YesNo, { message: 'Invalid value for impact.' })
    impact: YesNo;

    @IsNotEmpty({ message: 'Violations field is required.' })
    @IsEnum(YesNoCopy, { message: 'Invalid value for violations.' })
    violations: YesNoCopy;

    @IsNotEmpty({ message: 'Environmental field is required.' })
    @IsEnum(Environmental, { message: 'Invalid value for environmental.' })
    environmental: Environmental;

    @IsNotEmpty({ message: 'Compliance field is required.' })
    @IsEnum(Compliance, { message: 'Invalid value for compliance.' })
    compliance: Compliance;
}
