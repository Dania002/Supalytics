import { Hours } from "utility/common/hours.enum";
import { Raise } from "utility/common/raise.enum";

export const sectionSixRiskMap = {
    hours: {
        [Hours.InternalSystemAndReview]: 'low',
        [Hours.InformalTracking]: 'medium',
        [Hours.NoSystem]: 'high',
    },
    raise: {
        [Raise.FormalChannel]: 'low',
        [Raise.ManagerOnly]: 'medium',
        [Raise.NoMethod]: 'high',
    },
};
