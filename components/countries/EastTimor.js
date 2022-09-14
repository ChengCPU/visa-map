import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const EastTimor = () => {

    const { eastTimorColor } = useContext(ColorContext)

return (
<g className={'eastTimor'}>
    <style jsx>{`
    .eastTimor {
    fill: ${eastTimorColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z" />
<circle r="5" cy="558" cx="1699" stroke="black"/>
</g>
)
}

export default EastTimor