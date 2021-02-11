import Input from '../../../atoms/Input'

interface Props {
    github: string
    setValue(e: any): void
}

const Github: React.FC<Props> = ({ github, setValue }) => {
    return (
        <>
            <Input
                type="text"
                title="Usuário GitHub"
                value={github}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default Github
