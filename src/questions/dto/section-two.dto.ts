import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Policies } from "utility/common/policies.enum";
import { Procedures } from "utility/common/procedures.enum";
import { YesNo } from "utility/common/yesno.enum";
import { Apply } from "utility/common/apply.enum";
import { Law } from "utility/common/law.enum";
import { Implementation } from "utility/common/implementation.enum";
import { Effectiveness } from "utility/common/effectiveness.enum";
import { ApiProperty } from "@nestjs/swagger";

export class SectionTwoDto {
    @IsNotEmpty({ message: 'Policies field is required.' })
    @IsEnum(Policies, { message: 'Invalid value for policies.' })
    policies: Policies;

    @IsNotEmpty({ message: 'Procedures field is required.' })
    @IsEnum(Procedures, { message: 'Invalid value for procedures.' })
    procedures: Procedures;

    @IsNotEmpty({ message: 'Accountable field is required.' })
    @IsEnum(YesNo, { message: 'Invalid value for accountable.' })
    accountable: YesNo;

    @IsNotEmpty({ message: 'Apply field is required.' })
    @IsEnum(Apply, { message: 'Invalid value for apply.' })
    apply: Apply;

    @IsNotEmpty({ message: 'Law field is required.' })
    @IsEnum(Law, { message: 'Invalid value for law.' })
    law: Law;

    @IsNotEmpty({ message: 'Implementation field is required.' })
    @IsEnum(Implementation, { message: 'Invalid value for implementation.' })
    implementation: Implementation;

    @IsNotEmpty({ message: 'Effectiveness field is required.' })
    @IsEnum(Effectiveness, { message: 'Invalid value for effectiveness.' })
    effectiveness: Effectiveness;
}

export class SectionTwoUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    upload: any;
}