import { IsEnum, IsNotEmpty } from 'class-validator';
import { Move } from 'utility/common/move.emun';
import { Migrate } from 'utility/common/migrate.enum';

export class SectionThreeDto {
    @IsNotEmpty({ message: 'Move field is required.' })
    @IsEnum(Move, { message: 'Invalid value for move.' })
    move: Move;

    @IsNotEmpty({ message: 'Migrate field is required.' })
    @IsEnum(Migrate, { message: 'Invalid value for migrate.' })
    migrate: Migrate;
}
