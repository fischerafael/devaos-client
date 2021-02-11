export function verifyData(data: NextProps) {}

export function filterUser(data: NextProps) {
    const { github, personal, links } = data

    const githubURL = `http://github.com/${github}`

    const { avatar, name, title } = personal

    const linkedin = links?.linkedin
    const blog = links?.blog

    return {
        github: githubURL,
        name,
        avatar,
        title,
        linkedin,
        blog
    }
}

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
