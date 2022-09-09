import { memo, useContext } from 'react'
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
<circle r="5" cy="500" cx="555" stroke="black"/>
</g>
)
}

export default memo(Curacao)