import CustomHead from '../../src/components/atoms/CustomHead'
import NavBar from '../../src/components/organisms/NavBar'
import HeaderProfile from '../../src/components/organisms/HeaderProfile'
import InfoSection from '../../src/components/organisms/InfoSection'
import ExperienceSection from '../../src/components/organisms/ExperienceSection'
import LoadingPage from '../../src/components/templates/LoadingPage'

import {
    getStaticPathsGithub,
    getStaticPathsGithubFormat,
    getStaticPropsGithub
} from '../../src/services/devaos-api'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import useGetProfileData from '../../src/hooks/useGetProfileData'

import useAuth from '../../src/hooks/useAuth'
import EditContainer from '../../src/components/organisms/EditContainer'
import { useContext, useState } from 'react'
import EditContext from '../../src/contexts/edit'
import useUpdatedData from '../../src/hooks/useUpdatedData'

interface Props {
    data: NextProps
}

const Home: React.FC<Props> = ({ data }) => {
    const { isFallback } = useRouter()
    if (isFallback) return <LoadingPage />

    const [initialData, setInitialData] = useState(data)

    useUpdatedData(setInitialData)

    const { logged, user, isOwner } = useAuth()
    const { activeEditMode } = useContext(EditContext)

    console.log(logged, user, isOwner)

    const {
        avatar,
        name,
        title,
        github,
        linkedin,
        blog,
        bio,
        proExp,
        eduExp,
        skills
    } = useGetProfileData(initialData)

    console.log(eduExp, proExp)

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

            {isOwner && activeEditMode && !bio && <EditContainer kind="bio" />}

            {bio && <InfoSection bio={bio} />}

            {isOwner && activeEditMode && <EditContainer kind="exp" />}

            {proExp.length > 0 && (
                <ExperienceSection type={'professional'} experiences={proExp} />
            )}

            {isOwner && activeEditMode && <EditContainer kind="edu" />}

            {eduExp.length > 0 && (
                <ExperienceSection type={'education'} experiences={eduExp} />
            )}

            {isOwner && activeEditMode && <EditContainer kind="skill" />}

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
