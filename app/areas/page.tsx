import AreaCard from '../../components/areas/AreaCard'

export default function Page() {
    return (
        <div>
            <h1>Hello from the AREAS page.</h1>
            <AreaCard
                title="Test 1"
                desc={'Hello there'}           
            />
            <AreaCard
                title="Test 2"
                desc={'This actually works'}
            />
            <AreaCard
                title="Test 3"
                desc={'Woohoo!'}
            />
        </div>

    )
}