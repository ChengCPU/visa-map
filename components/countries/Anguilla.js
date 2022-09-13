import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Anguilla = () => {

    const { anguillaColor } = useContext(ColorContext)

return (
<g className={'anguilla'}>
    <style jsx>{`
    .anguilla {
    fill: ${anguillaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M634.2 384.9l-0.2 0 0.3-0.4 0.3 0-0.2 0.3-0.2 0.1z" />
<circle r="5" cy="900" cx="993" stroke="black"/>
</g>
)
}
  
export default Anguilla