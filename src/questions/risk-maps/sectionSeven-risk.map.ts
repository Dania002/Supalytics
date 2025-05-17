import { Favorable } from "utility/common/favorable.enum";
import { YesNo } from "utility/common/yesno.enum";

export const sectionSevenRiskMap = {
    favorable: {
        [Favorable.DiscriminatoryReason]: 'high',
        [Favorable.None]: 'low',
    },
    organize: {
        [YesNo.NO]: 'low',
        [YesNo.YES]: 'high',
    },
};
