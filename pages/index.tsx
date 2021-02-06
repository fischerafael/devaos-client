import NavBar from '../src/components/organisms/NavBar'
import HeaderProfile from '../src/components/organisms/HeaderProfile'
import InfoSection from '../src/components/organisms/InfoSection'
import ProfessionalSection from '../src/components/organisms/ProfessionalSection'
import { jobMock } from '../src/services/jobMock'

const Home = () => {
    return (
        <>
            <NavBar />
            <HeaderProfile
                avatar={'https://avatars.githubusercontent.com/u/47259718?v=4'}
                name="Rafael Fischer"
                description="Desenvolvedor React, NextJS, NodeJS, Typescript &
                Javascript, UX & UI Designer, Produtor de Conteúdo"
                github="https://github.com/fischerafael"
                linkedin="https://www.linkedin.com/in"
                web="https://fischerafael.com"
            />
            <InfoSection
                bio="Desenvolvedor web (React JS e Node Js),
                            designer/arquiteto (UFPR), mestre em engenharia de
                            construção civil (UFPR) e doutorando (UFPR), também
                            em engenharia de construção civil. Tem experiência
                            em desenvolvimento de APIs REST e Graphql (Apollo
                            Server) utilizando Javascript e Typescript. Tem
                            experiência desenvolvendo frontends com React
                            (hooks, context API."
            />
            <ProfessionalSection jobs={jobMock} />
        </>
    )
}

export default Home
