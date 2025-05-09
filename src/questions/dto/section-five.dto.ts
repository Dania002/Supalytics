import { IsEnum, IsNotEmpty } from "class-validator";
import { Measures } from "utility/common/measures.enum";
import { Ppe } from "utility/common/ppe.rnum";
import { Provides } from "utility/common/provides.enum";
import { Risk } from "utility/common/risk.enum";
import { Safety } from "utility/common/safety.enum";
import { Workplace } from "utility/common/workplace.enum";
import { YesNo } from "utility/common/yesno.enum";

export class SectionFiveDto {
    @IsNotEmpty({ message: 'Safety field is required.' })
    @IsEnum(Safety, { message: 'Invalid value for safety.' })
    safety: Safety;

    @IsNotEmpty({ message: 'PPE field is required.' })
    @IsEnum(Ppe, { message: 'Invalid value for PPE.' })
    ppe: Ppe;

    @IsNotEmpty({ message: 'Measures field is required.' })
    @IsEnum(Measures, { message: 'Invalid value for measures.' })
    measures: Measures;

    @IsNotEmpty({ message: 'Machinery field is required.' })
    @IsEnum(YesNo, { message: 'Invalid value for machinery.' })
    machinery: YesNo;

    @IsNotEmpty({ message: 'Provides field is required.' })
    @IsEnum(Provides, { message: 'Invalid value for provides.' })
    provides: Provides;

    @IsNotEmpty({ message: 'Risk field is required.' })
    @IsEnum(Risk, { message: 'Invalid value for risk.' })
    risk: Risk;

    @IsNotEmpty({ message: 'Workplace field is required.' })
    @IsEnum(Workplace, { message: 'Invalid value for workplace.' })
    workplace: Workplace;
}
