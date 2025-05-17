export function evaluateSectionRisk(answers: Record<string, any>, riskMap: any): 'high' | 'medium' | 'low' {
    const risks = Object.entries(answers).map(([key, value]) => {
        return riskMap[key]?.[value] || 'low';
    });

    if (risks.includes('high')) return 'high';
    if (risks.includes('medium')) return 'medium';
    return 'low';
}
