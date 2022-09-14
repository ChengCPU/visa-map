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
<circle r="4" cy="424" cx="598" stroke="black"/>
</g>
)
}

export default Curacao