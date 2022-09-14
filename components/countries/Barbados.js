import { useContext } from 'react'
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
<circle r="3.5" cy="418" cx="651" stroke="black"/>
</g>
)
}
    
export default Barbados