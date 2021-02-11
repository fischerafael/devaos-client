import CustomHead from '../../src/components/atoms/CustomHead'
import NavBar from '../../src/components/organisms/NavBar'
import HeaderProfile from '../../src/components/organisms/HeaderProfile'
import InfoSection from '../../src/components/organisms/InfoSection'
import ExperienceSection from '../../src/components/organisms/ExperienceSection'

import {
    getStaticPathsGithub,
    getStaticPathsGithubFormat,
    getStaticPropsGithub
} from '../../src/services/devaos-api'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import LoadingPage from '../../src/components/templates/LoadingPage'

const Home = ({ data }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <LoadingPage />
    }

    const userData = data as NextProps

    const proExp = userData?.experiences
        ? userData.experiences.filter((exp) => exp.type === 'professional')
        : []
    const edExp = userData?.experiences
        ? userData.experiences.filter((exp) => exp.type === 'education')
        : []
    const skills = userData?.skills ? userData.skills : []
    const bio = userData?.bio ? userData.bio : ''

    return (
        <>
            <CustomHead title={userData.personal.name} />
            <NavBar />
            <HeaderProfile
                avatar={userData.personal.avatar}
                name={userData.personal.name}
                description={userData.personal.title}
                github={`http://github.com/${userData.github}`}
            />
            {bio !== '' && <InfoSection bio={userData.bio.bio} />}
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
    const { data } = await getStaticPathsGithub()

    const paths = getStaticPathsGithubFormat(data)

    return {
        paths: paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const github = context.params.github as string

    const { data, status } = await getStaticPropsGithub(github)

    if (status !== 200) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data
        },
        revalidate: 60
    }
}
