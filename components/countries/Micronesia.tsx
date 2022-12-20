import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Micronesia:React.FC = () => {

  const { micronesiaColor } = useContext(ColorContext)

return (
<g className={'micronesia'}>
  <style jsx>{`
  .micronesia {
  fill: ${micronesiaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="457" cx="1881" stroke="black"/>
</g>
)
}

export default Micronesia