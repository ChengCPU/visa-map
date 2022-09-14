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
<circle r="3" cy="382" cx="632.5" stroke="black"/>
</g>
)
}
  
export default Anguilla