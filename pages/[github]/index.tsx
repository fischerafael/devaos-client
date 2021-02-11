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
import { filterExp, filterUser } from '../../src/helpers/pages/github'

interface Props {
    data: NextProps
}

const Home: React.FC<Props> = ({ data }) => {
    const { isFallback } = useRouter()
    if (isFallback) return <LoadingPage />

    const { avatar, name, title, github, linkedin, blog } = filterUser(data)
    const { proExp, eduExp } = filterExp(data)
    const skills = data?.skills ? data.skills : []
    const bio = data?.bio ? data.bio : ''

    return (
        <>
            <CustomHead title={name} />
            <NavBar />
            <HeaderProfile
                avatar={avatar}
                name={name}
                description={title}
                github={github}
                linkedin={linkedin}
                web={blog}
            />
            {bio && <InfoSection bio={data.bio.bio} />}
            {proExp.length && (
                <ExperienceSection type={'professional'} experiences={proExp} />
            )}
            {eduExp.length && (
                <ExperienceSection type={'education'} experiences={eduExp} />
            )}
            {skills.length && (
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
