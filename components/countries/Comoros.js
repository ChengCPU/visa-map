import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Comoros = () => {

    const { comorosColor } = useContext(ColorContext)

return (
<g className={'comoros'}>
    <style jsx>{`
    .comoros {
    fill: ${comorosColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="576" cx="1234" stroke="black"/>
</g>
)
}

export default Comoros