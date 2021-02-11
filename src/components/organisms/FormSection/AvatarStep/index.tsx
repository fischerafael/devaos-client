import Avatar from '../../../atoms/Avatar'
import Input from '../../../atoms/Input'

interface Props {
    avatar: string
    setAvatar(e: any): void
}

const Github: React.FC<Props> = ({ avatar, setAvatar }) => {
    return (
        <>
            <Avatar src={avatar} alt="Avatar" />
            <Input
                type="text"
                title="Link para Imagem de Perfil"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
            />
        </>
    )
}

export default Github
