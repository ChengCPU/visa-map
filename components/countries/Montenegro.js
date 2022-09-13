import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Montenegro = () => {

    const { montenegroColor } = useContext(ColorContext)

return (
<g className={'montenegro'}>
    <style jsx>{`
    .montenegro {
    fill: ${montenegroColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z" stroke="black"/>
<circle r="5" cy="100" cx="1100" stroke="black"/>
</g>
)
}

export default Montenegro