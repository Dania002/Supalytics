import { Apply } from 'utility/common/apply.enum';
import { Effectiveness } from 'utility/common/effectiveness.enum';
import { Implementation } from 'utility/common/implementation.enum';
import { Law } from 'utility/common/law.enum';
import { Policies } from 'utility/common/policies.enum';
import { Procedures } from 'utility/common/procedures.enum';
import { YesNo } from 'utility/common/yesno.enum';

export const sectionTwoRiskMap = {
    policies: {
        [Policies.NO]: 'high',
        [Policies.YES]: 'medium',
        [Policies.YES_WITH_REVIEW]: 'low',
    },
    procedures: {
        [Procedures.INCONSISTENT_IMPLEMENTATION]: 'high',
        [Procedures.INFORMAL_NO_DOCUMENTATION]: 'medium',
        [Procedures.INFORMAL_AND_NOT_UPDATED]: 'medium',
        [Procedures.FORMAL_AND_UPDATED]: 'low',
        [Procedures.UNKNOWN]: 'high',
    },
    accountable: {
        [YesNo.NO]: 'high',
        [YesNo.YES]: 'low',
    },
    apply: {
        [Apply.TRAINING_ONLY]: 'medium',
        [Apply.NO_HR_POLICIES]: 'high',
        [Apply.NO_TRAINING_EVALUATION]: 'high',
        [Apply.TRAINING_REFRESHER_EVALUATION]: 'low',
    },
    law: {
        [Law.NO_TRAINING]: 'high',
        [Law.NO_WRITTEN_POLICIES]: 'high',
        [Law.PARTIAL_TRAINING]: 'medium',
        [Law.FULL_TRAINING_EVALUATION]: 'low',
    },
    implementation: {
        [Implementation.NO_RECORDS_KEPT]: 'high',
        [Implementation.SOME_RECORDS_ONLY]: 'medium',
        [Implementation.ALL_RECORDS_MAINTAINED]: 'low',
    },
    effectiveness: {
        [Effectiveness.NO_MONITORING]: 'high',
        [Effectiveness.PARTIAL_MONITORING]: 'medium',
        [Effectiveness.FULL_MONITORING]: 'low',
    },
};
