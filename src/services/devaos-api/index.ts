import axios from 'axios'

const devaosApi = axios.create({
    baseURL: 'https://devaos.herokuapp.com'
})

export default devaosApi

export async function getStaticPropsGithub(github: string) {
    try {
        const user = await devaosApi.get(
            `https://devaos.herokuapp.com/profiles/${github}`
        )
        const { data, status } = user
        console.log('aqui')
        return { status, data }
    } catch (err) {
        //console.log('getStaticPropsError', err)
        return { status: 404, data: err }
    }
}

export async function getStaticPathsGithub() {
    try {
        const users = await devaosApi.get('/users')
        const { data, status } = users
        return { status, data }
    } catch (err) {
        console.log('getStaticPathsError', err)
        return { status: 404, data: err }
    }
}

export function getStaticPathsGithubFormat(data: { github: string }[]) {
    const githubs = data.map((item) => item.github)

    const paths = githubs.map((github: string) => {
        return {
            params: { github }
        }
    })

    return paths
}
