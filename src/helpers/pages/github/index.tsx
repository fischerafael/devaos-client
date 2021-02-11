export function filterExp(data: NextProps): { proExp: any[]; eduExp: any[] } {
    const experiences = data?.experiences

    if (experiences) {
        const proExp = experiences.filter((exp) => exp.type === 'professional')
        const eduExp = experiences.filter((exp) => exp.type === 'education')

        return {
            proExp,
            eduExp
        }
    }

    const proExp = []
    const eduExp = []

    return {
        proExp,
        eduExp
    }
}
