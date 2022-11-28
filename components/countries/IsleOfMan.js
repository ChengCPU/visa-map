import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const IsleOfMan = () => {

  const { isleOfManColor } = useContext(ColorContext)

return (
<g className={'isleOfMan'}>
  <style jsx>{`
  .isleOfMan {
  fill: ${isleOfManColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="158" cx="962" stroke="black"/>
</g>
)
}

export default IsleOfMan