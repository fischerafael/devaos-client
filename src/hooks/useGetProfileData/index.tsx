import { filterExp, filterUser } from '../../helpers/pages/github'

const useGetProfileData = (data: NextProps) => {
    const { avatar, name, title, github, linkedin, blog } = filterUser(data)
    const { proExp, eduExp } = filterExp(data)
    const skills = data?.skills ? data.skills : []
    const bio = data?.bio ? data.bio.bio : ''

    return {
        avatar,
        name,
        title,
        github,
        linkedin,
        blog,
        proExp,
        eduExp,
        skills,
        bio
    }
}

export default useGetProfileData
