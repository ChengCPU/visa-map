import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Transnistria:React.FC = () => {

  const { transnistriaColor } = useContext(ColorContext)
  const { transnistriaDiff } = useContext(DiffContext)

return (
<g className={'transnistria'}>
  <style jsx>{`
  .transnistria {
  fill: ${transnistriaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(transnistriaDiff == 1) ?
<circle fill="url(#xt)" r="2.5" cy="198" cx="1132.7" stroke="black"/>
:
<circle r="2.5" cy="198" cx="1132.7" stroke="black"/>
}
</g>
)
}

export default Transnistria