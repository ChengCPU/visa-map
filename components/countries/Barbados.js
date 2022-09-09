import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Barbados = () => {
    
    const { barbadosColor } = useContext(ColorContext)

return (
<g className={'barbados'}>
    <style jsx>{`
    .barbados {
    fill: ${barbadosColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M651.5 418l-0.6-0.2-0.1-0.5 0-0.8 0.2-0.4 0.2 0.2 0.2 0.6 0.5 0.3 0.1 0.4-0.5 0.4z" />
<circle r="5" cy="211" cx="600" stroke="black"/>
</g>
)
}
    
export default memo(Barbados)