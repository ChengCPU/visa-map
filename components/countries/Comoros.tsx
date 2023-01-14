import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Comoros:React.FC = () => {

  const { comorosColor } = useContext(ColorContext)
  const { comorosDiff } = useContext(DiffContext)

return (
<g className={'comoros'}>
  <style jsx>{`
  .comoros {
  fill: ${comorosColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="km" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(comorosDiff == 1) ?
<circle fill="url(#km)" r="5" cy="576" cx="1234" stroke="black"/>
:
<circle r="5" cy="576" cx="1234" stroke="black"/>
}
</g>
)
}

export default Comoros