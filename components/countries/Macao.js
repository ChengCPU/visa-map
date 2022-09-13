import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Macao = () => {

    const { macaoColor } = useContext(ColorContext)

return (
<g className={'macao'}>
    <style jsx>{`
    .macao {
    fill: ${macaoColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="1500" stroke="black"/>
</g>
)
}

export default Macao