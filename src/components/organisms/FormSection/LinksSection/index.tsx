import Input from '../../../atoms/Input'

interface Props {
    linkedin: string
    setLinkedin(e: any): void
    blog: string
    setBlog(e: any): void
}

const LinksSection: React.FC<Props> = ({
    linkedin,
    setLinkedin,
    blog,
    setBlog
}) => {
    return (
        <>
            <Input
                type="text"
                title="Linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
            />
            <Input
                type="text"
                title="Blog / Website"
                value={blog}
                onChange={(e) => setBlog(e.target.value)}
            />
        </>
    )
}

export default LinksSection
