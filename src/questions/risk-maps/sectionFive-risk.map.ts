import { Measures } from "utility/common/measures.enum";
import { Ppe } from "utility/common/ppe.rnum";
import { Provides } from "utility/common/provides.enum";
import { Risk } from "utility/common/risk.enum";
import { Safety } from "utility/common/safety.enum";
import { Workplace } from "utility/common/workplace.enum";
import { YesNo } from "utility/common/yesno.enum";

export const sectionFiveRiskMap = {
    safety: {
        [Safety.REGULAR]: 'low',
        [Safety.PARTIAL]: 'medium',
        [Safety.NONE]: 'high',
    },
    PPE: {
        [Ppe.YES]: 'medium',
        [Ppe.NO_OR_UNKNOWN]: 'high',
    },
    measures: {
        [Measures.FULL]: 'low',
        [Measures.PARTIAL]: 'medium',
        [Measures.NONE]: 'high',
    },
    machinery: {
        [YesNo.NO]: 'low',
        [YesNo.YES]: 'medium',
    },
    provides: {
        [Provides.COMPANY_OR_THIRD_PARTY]: 'medium',
    },
    risk: {
        [Risk.FULL]: 'low',
        [Risk.PARTIAL]: 'medium',
        [Risk.NONE]: 'high',
    },
    workplace: {
        [Workplace.WashingShowerFacilities]: 'low',
        [Workplace.ToiletsWithPrivacy]: 'low',
        [Workplace.ShadeForHeatProtection]: 'low',
        [Workplace.CleanFoodStorage]: 'low',
        [Workplace.CleanDrinkingWater]: 'low',
        [Workplace.SomeMissingElements]: 'medium',
        [Workplace.NoneOfTheAbove]: 'high',
    },
};
