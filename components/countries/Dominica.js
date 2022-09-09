import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Dominica = () => {

    const { dominicaColor } = useContext(ColorContext)

return (
<g className={'dominica'}>
    <style jsx>{`
    .dominica {
    fill: ${dominicaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M642 401.7l0.5 0.1 0.2 0.5 0 0.6-0.1 0.8-0.1 0.2-0.2 0.1-0.4 0.2 0.1-0.4-0.1-0.2-0.1-0.7-0.3-0.5 0-0.3 0.1-0.3 0-0.3 0.2 0 0.2 0.2z" />
<circle r="5" cy="500" cx="565" stroke="black"/>
</g>
)
}

export default memo(Dominica)