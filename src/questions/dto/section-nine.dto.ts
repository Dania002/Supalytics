import { IsEnum, IsNotEmpty } from "class-validator";
import { YesNo } from "utility/common/yesno.enum";

export class SectionNineDto {
  @IsNotEmpty({ message: 'Ethics field is required.' })
  @IsEnum(YesNo, { message: 'Invalid value for ethics.' })
  ethics: YesNo;

  @IsNotEmpty({ message: 'Responsible field is required.' })
  @IsEnum(YesNo, { message: 'Invalid value for responsible.' })
  responsible: YesNo;
}
