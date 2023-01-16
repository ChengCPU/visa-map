import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Tokelau:React.FC = () => {

  const { tokelauColor } = useContext(ColorContext)
  const { tokelauDiff } = useContext(DiffContext)

return (
<g className={'tokelau'}>
  <style jsx>{`
  .tokelau {
  fill: ${tokelauColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tk" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(tokelauDiff == 1) ?
<circle fill="url(#tk)" r="5" cy="560" cx="25" stroke="black"/>
:
<circle r="5" cy="560" cx="25" stroke="black"/>
}
</g>
)
}

export default Tokelau