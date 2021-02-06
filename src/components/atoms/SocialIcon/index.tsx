import Link from 'next/link'

interface Props {
    link: string
    image: string
    title: string
}

const SocialIcon: React.FC<Props> = ({ link, image, title }) => {
    return (
        <Link href={link}>
            <a>
                <img
                    style={{
                        borderRadius: '0',
                        margin: '1rem 0',
                        width: '2rem',
                        height: '2rem'
                    }}
                    src={image}
                    alt={title}
                />
            </a>
        </Link>
    )
}

export default SocialIcon
