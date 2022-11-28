import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const NorthMacedonia = () => {

  const { northMacedoniaColor } = useContext(ColorContext)

return (
<g className={'northMacedonia'}>
  <style jsx>{`
  .northMacedonia {
  fill: ${northMacedoniaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z" stroke="black"/>
</g>
)
}

export default NorthMacedonia