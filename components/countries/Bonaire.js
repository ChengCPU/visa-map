import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Bonaire = () => {

    const { bonaireColor } = useContext(ColorContext)

return (
<g className={'bonaire'}>
    <style jsx>{`
    .bonaire {
    fill: ${bonaireColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="424" cx="606" stroke="black"/>
</g>
)
}

export default Bonaire