import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Martinique = () => {

    const { martiniqueColor } = useContext(ColorContext)

return (
<g className={'martinique'}>
    <style jsx>{`
    .martinique {
    fill: ${martiniqueColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M644 406.9l0 0.2 0.4-0.1-0.2 0.5 0.2 0.2 0 0.2 0.2 0.2 0.2 0.9-0.3 0.3-0.1-0.4-0.1 0.1-0.6-0.1-0.4 0-0.2-0.3 0.6-0.5-0.4 0-0.4-0.4-0.1-0.5-0.2-0.5 0.3-0.4 0.4 0.1 0.5 0.3 0.2 0.2z" />
<circle r="5" cy="230" cx="1500" stroke="black"/>
</g>
)
}

export default Martinique