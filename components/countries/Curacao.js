import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Curacao = () => {

    const { curacaoColor } = useContext(ColorContext)

return (
<g className={'curacao'}>
    <style jsx>{`
    .curacao {
    fill: ${curacaoColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M599 424.5l-0.3 0-0.4-0.3-0.3-0.1-0.3-0.3-0.1-0.2-0.3-0.1-0.2-0.4-0.3-0.3 0.1-0.5 0.5 0.3 0.1 0.5 0.4 0.4 0.7 0.2 0.2 0.3 0.3 0.4-0.1 0.1z" />
<circle r="5" cy="500" cx="555" stroke="black"/>
</g>
)
}

export default Curacao