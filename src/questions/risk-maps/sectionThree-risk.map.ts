import { Migrate } from 'utility/common/migrate.enum';
import { Move } from 'utility/common/move.emun';

export const sectionThreeRiskMap = {
    move: {
        [Move.NO]: 'low',
        [Move.UNKNOWN]: 'high',
        [Move.YES_HIGH_INCOME]: 'high',
        [Move.YES_MIDDLE_INCOME]: 'medium',
        [Move.YES_LOW_INCOME]: 'low',
    },
    migrate: {
        [Migrate.NO]: 'low',
        [Migrate.DONT_KNOW]: 'high',
        [Migrate.YES]: 'medium',
        [Migrate.NOT_APPLICABLE]: 'low',
    },
};
