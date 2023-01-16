import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Malta:React.FC = () => {

  const { maltaColor } = useContext(ColorContext)
  const { maltaDiff } = useContext(DiffContext)

return (
<g className={'malta'}>
  <style jsx>{`
  .malta {
  fill: ${maltaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(maltaDiff == 1) ?
<circle fill="url(#mt)" r="4" cy="271" cx="1062" stroke="black"/>
:
<circle r="4" cy="271" cx="1062" stroke="black"/>
}
</g>
)
}

export default Malta