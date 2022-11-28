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
<circle r="2.5" cy="380" cx="635" stroke="black"/>
</g>
)
}
  
export default Anguilla