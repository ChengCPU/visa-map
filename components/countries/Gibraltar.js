import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Gibraltar = () => {

  const { gibraltarColor } = useContext(ColorContext)

return (
<g className={'gibraltar'}>
  <style jsx>{`
  .gibraltar {
  fill: ${gibraltarColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="270" cx="958" stroke="black"/>
</g>
)
}

export default Gibraltar