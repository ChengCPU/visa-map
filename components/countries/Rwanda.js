import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Rwanda = () => {

    const { rwandaColor } = useContext(ColorContext)

return (
<g className={'rwanda'}>
    <style jsx>{`
    .rwanda {
    fill: ${rwandaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z" />
<circle r="5" cy="400" cx="1000" stroke="black"/>
</g>
)
}

export default Rwanda