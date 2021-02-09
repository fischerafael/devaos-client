import CustomHead from '../../src/components/atoms/CustomHead'
import NavBar from '../../src/components/organisms/NavBar'
import HeaderProfile from '../../src/components/organisms/HeaderProfile'
import InfoSection from '../../src/components/organisms/InfoSection'
import ExperienceSection from '../../src/components/organisms/ExperienceSection'

import { jobMock } from '../../src/services/jobMock'
import { edMock } from '../../src/services/educationMock'
import { skillMock } from '../../src/services/skillMock'
import { GetStaticPaths, GetStaticProps } from 'next'
import devaosApi from '../../src/services/devaos-api'

const Home = ({ data }) => {
    const userData = data as NextProps

    const proExp = userData.experiences.filter(
        (exp) => exp.type === 'professional'
    )
    const edExp = userData.experiences.filter((exp) => exp.type === 'education')
    const skills = userData.skills

    return (
        <>
            <CustomHead title={userData.personal.name} />
            <NavBar />
            <HeaderProfile
                avatar={`http://${userData.personal.avatar}`}
                name={userData.personal.name}
                description={userData.personal.title}
                github={`http://github.com/${userData.github}`}
                linkedin="https://www.linkedin.com/in"
                web={`/${userData.github}`}
            />
            {userData.bio.bio && <InfoSection bio={userData.bio.bio} />}
            {proExp.length > 0 && (
                <ExperienceSection type={'professional'} experiences={proExp} />
            )}
            {edExp.length > 0 && (
                <ExperienceSection type={'education'} experiences={edExp} />
            )}
            {skills.length > 0 && (
                <ExperienceSection type={'skill'} skills={skills} />
            )}
        </>
    )
}

export default Home

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { github: 'fischerafael' } }],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const github = context.params.github as string

    const { data } = await devaosApi.get(
        `https://devaos.herokuapp.com/profiles/${github}`
    )

    return {
        props: {
            data
        },
        revalidate: 60
    }
}

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
}
