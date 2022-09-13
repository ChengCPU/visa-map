import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Mayotte = () => {

    const { mayotteColor } = useContext(ColorContext)

return (
<g className={'mayotte'}>
    <style jsx>{`
    .mayotte {
    fill: ${mayotteColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1240.2 583.1l0.2 0.3 0.5 0.2 0 0.3-0.2 0.2 0.1 0.2-0.3 0.6 0.1 0.2-0.3 0.1-0.2-0.3 0-0.3 0.2-0.2-0.2-0.7-0.1-0.1-0.1-0.2 0.3-0.3z" />
<circle r="5" cy="200" cx="1100" stroke="black"/>
</g>
)
}

export default Mayotte