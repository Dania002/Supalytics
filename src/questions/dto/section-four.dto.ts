import { IsEnum, IsNotEmpty } from 'class-validator';
import { Trade } from 'utility/common/trade.enum';
import { Recognize } from 'utility/common/recognize.enum';
import { Industrial } from 'utility/common/industrial.enum';
import { Action } from 'utility/common/action.enum';

export class SectionFourDto {
    @IsNotEmpty({ message: 'Trade field is required.' })
    @IsEnum(Trade, { message: 'Invalid value for trade.' })
    trade: Trade;

    @IsNotEmpty({ message: 'Recognize field is required.' })
    @IsEnum(Recognize, { message: 'Invalid value for recognize.' })
    recognize: Recognize;

    @IsNotEmpty({ message: 'Industrial field is required.' })
    @IsEnum(Industrial, { message: 'Invalid value for industrial.' })
    industrial: Industrial;

    @IsNotEmpty({ message: 'Action field is required.' })
    @IsEnum(Action, { message: 'Invalid value for action.' })
    action: Action;
}
