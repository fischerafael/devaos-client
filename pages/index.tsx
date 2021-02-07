import CustomHead from '../src/components/atoms/CustomHead'
import NavBar from '../src/components/organisms/NavBar'
import HeaderProfile from '../src/components/organisms/HeaderProfile'
import InfoSection from '../src/components/organisms/InfoSection'
import ExperienceSection from '../src/components/organisms/ExperienceSection'

import { jobMock } from '../src/services/jobMock'
import { edMock } from '../src/services/educationMock'
import { skillMock } from '../src/services/skillMock'

const Home = () => {
    return (
        <>
            <CustomHead title="Rafael Fischer" />
            <NavBar />
            <HeaderProfile
                avatar={'https://avatars.githubusercontent.com/u/47259718?v=4'}
                name="Rafael Fischer"
                description="Desenvolvedor ReactJS, NextJS, NodeJS, Javascript & Typescript. UI & UX Designer. Produtor de conteúdo para internet."
                github="https://github.com/fischerafael"
                linkedin="https://www.linkedin.com/in"
                web="https://fischerafael.com"
            />
            <InfoSection bio="Desenvolvedor web com experiência utilizando tecnologias como ReactJS, NextJS, NodeJS, Typescript e Javascript. Originalmente graduado em Arquitetura e Urbanismo, tem mestrado em Engenharia Civil e atualmente está terminando um doutorado onde está desenvolvendo um aplicativo que auxilia arquitetos a compreenderem melhor seus usuários por meio de um algoritmo de inteligência artificial. Tem experiência produzindo conteúdo para a internet (blog, youtube, podcasts), com mais de 20 mil seguidores e 2 milhões de acessos em diversos projetos. É professor substituto no departamento de Expressão Gráfica da Universidade Federal do Paraná." />
            <ExperienceSection type={'professional'} experiences={jobMock} />
            <ExperienceSection type={'education'} experiences={edMock} />
            <ExperienceSection type={'skill'} skills={skillMock} />
        </>
    )
}

export default Home
