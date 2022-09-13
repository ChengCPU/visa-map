import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Jamaica = () => {

    const { jamaicaColor } = useContext(ColorContext)

return (
<g className={'jamaica'}>
    <style jsx>{`
    .jamaica {
    fill: ${jamaicaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M556.5 387.1l-1.8 1.1-3-1.1-2.9-2.3 0.8-1.5 2.4-0.4 1.3 0.2 3.7 0.6 2.7 1.5 0.8 1.8-4 0.1z" />
<circle r="5" cy="230" cx="1250" stroke="black"/>
</g>
)
}

export default Jamaica