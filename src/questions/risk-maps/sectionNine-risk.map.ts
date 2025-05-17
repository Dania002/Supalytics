import { YesNo } from "utility/common/yesno.enum";

export const sectionNineRiskMap = {
    ethics: {
        [YesNo.NO]: 'low',
        [YesNo.YES]: 'high',
    },
    responsible: {
        [YesNo.NO]: 'high',
        [YesNo.YES]: 'low',
    },
};
