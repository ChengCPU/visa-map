import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const IsleOfMan:React.FC = () => {

  const { isleOfManColor } = useContext(ColorContext)
  const { isleOfManDiff } = useContext(DiffContext)

return (
<g className={'isleOfMan'}>
  <style jsx>{`
  .isleOfMan {
  fill: ${isleOfManColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="im" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(isleOfManDiff == 1) ?
<circle fill="url(#im)" r="4" cy="158" cx="962" stroke="black"/>
:
<circle r="4" cy="158" cx="962" stroke="black"/>
}
</g>
)
}

export default IsleOfMan