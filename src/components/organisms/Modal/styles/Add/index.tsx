import Input from '../../../../atoms/Input'
import TextArea from '../../../../atoms/TextArea'

interface Props {
    state: string | number
    setState(e: any): void
    sectionName: string
    inputType?: 'text' | 'password' | 'number'
    input?: boolean
}

const AddFeature: React.FC<Props> = ({
    state,
    setState,
    sectionName,
    input,
    inputType
}) => {
    return (
        <>
            {input ? (
                <Input
                    title={sectionName}
                    type={inputType}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            ) : (
                <TextArea
                    title={sectionName}
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            )}
        </>
    )
}

export default AddFeature
