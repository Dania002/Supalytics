import { Compliance } from "utility/common/compliance.enum";
import { Environmental } from "utility/common/environmental.enum";
import { YesNo } from "utility/common/yesno.enum";

export const sectionEightRiskMap = {
    impact: {
        [YesNo.NO]: 'low',
        [YesNo.YES]: 'medium',
    },
    violations: {
        [YesNo.NO]: 'low',
        [YesNo.YES]: 'high',
    },
    environmental: {
        [Environmental.AllClients]: 'low',
        [Environmental.MajorClientsOnly]: 'medium',
        [Environmental.NoneOrNotApplicable]: 'high',
    },
    compliance: {
        [Compliance.InternalReview]: 'low',
        [Compliance.NoProcess]: 'high',
        [Compliance.Other]: 'medium',
    },
};
