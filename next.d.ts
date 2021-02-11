interface IPersonal {
    avatar: string
    location: string
    title: string
    name: string
}

interface IBio {
    bio: string
}

interface ISKills {
    _id: string
    title: string
    description?: string
}

interface IExp {
    _id: string
    type: string
    title: string
    institution: string
    location: string
    startedAt?: number
    finishedAt?: number
    description?: string
}

interface NextProps {
    github: string
    email: string
    personal?: IPersonal
    bio?: IBio
    skills?: ISKills[]
    experiences?: IExp[]
    links?: {
        blog: string
        linkedin: string
    }
}
