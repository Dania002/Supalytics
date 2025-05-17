import { Action } from 'utility/common/action.enum';
import { Industrial } from 'utility/common/industrial.enum';
import { Recognize } from 'utility/common/recognize.enum';
import { Trade } from 'utility/common/trade.enum';

export const sectionFourRiskMap = {
    trade: {
        [Trade.YES]: 'low',
        [Trade.NO_COMPANY_POLICY]: 'high',
        [Trade.NO_LOCAL_LAW]: 'medium',
    },
    recognize: {
        [Recognize.FREE_INDEPENDENT_UNION]: 'low',
        [Recognize.COMPANY_OR_STATE_UNION]: 'medium',
        [Recognize.NOT_RECEIVED_REQUEST]: 'medium',
        [Recognize.UNIONS_BANNED_BY_LAW]: 'medium',
        [Recognize.NEGOTIATING]: 'medium',
        [Recognize.REQUEST_REJECTED]: 'high',
    },
    industrial: {
        [Industrial.NO]: 'low',
        [Industrial.GENERAL_STRIKE]: 'medium',
        [Industrial.COMPANY_SPECIFIC]: 'high',
    },
    action: {
        [Action.NONE]: 'low',
        [Action.HIRED_REPLACEMENTS]: 'high',
        [Action.PREVENTED_PARTICIPATION]: 'high',
        [Action.PUNISHED_STRIKERS]: 'high',
        [Action.USED_FORCE]: 'high',
    },
};
