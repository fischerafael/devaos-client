import Input from '../../../atoms/Input'

interface Props {
    name: string
    setName(e: any): void
    title: string
    setTitle(e: any): void
    location: string
    setLocation(e: any): void
}

const NameTitleLocationStep: React.FC<Props> = ({
    name,
    setName,
    title,
    setTitle,
    location,
    setLocation
}) => {
    return (
        <>
            <Input
                type="text"
                title="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="text"
                title="Profissão"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                title="Localização"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
        </>
    )
}

export default NameTitleLocationStep
