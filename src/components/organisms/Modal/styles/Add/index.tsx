import TextArea from '../../../../atoms/TextArea'

interface Props {
    state: string
    setState(e: any): void
    sectionName: string
}

const AddFeature: React.FC<Props> = ({ state, setState, sectionName }) => {
    return (
        <>
            <h1>Adicionar {sectionName}</h1>
            <TextArea
                title={sectionName}
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </>
    )
}

export default AddFeature
