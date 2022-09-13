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
<path d="M602 424.6l-0.2 0-0.1-0.5 0.1-0.3-0.1-0.3-0.4-0.1-0.3-0.3 0.1-0.3 1.2 0.6-0.1 0.2 0 0.4-0.2 0.2 0 0.4z" />
<circle r="5" cy="420" cx="1100" stroke="black"/>
</g>
)
}

export default Bonaire