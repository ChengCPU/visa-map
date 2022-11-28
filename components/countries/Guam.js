import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guam = () => {

  const { guamColor } = useContext(ColorContext)

return (
<g className={'guam'}>
  <style jsx>{`
  .guam {
  fill: ${guamColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="414" cx="1800" stroke="black"/>
</g>
)
}

export default Guam