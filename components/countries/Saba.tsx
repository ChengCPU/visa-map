import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Saba:React.FC = () => {

  const { sabaColor } = useContext(ColorContext)
  const { sabaDiff } = useContext(DiffContext)

return (
<g className={'saba'}>
  <style jsx>{`
  .saba {
  fill: ${sabaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xs" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(sabaDiff == 1) ?
<circle fill="url(#xs)" r="2.5" cy="392" cx="624" stroke="black"/>
:
<circle r="2.5" cy="392" cx="624" stroke="black"/>
}
</g>
)
}

export default Saba