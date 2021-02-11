import Input from '../../../atoms/Input'

interface Props {
    email: string
    setEmail(e: any): void
    password: string
    setPassword(e: any): void
}

const EmailPassword: React.FC<Props> = ({
    email,
    setEmail,
    password,
    setPassword
}) => {
    return (
        <>
            <Input
                type="text"
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                title="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </>
    )
}

export default EmailPassword
