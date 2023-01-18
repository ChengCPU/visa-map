import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Abkhazia:React.FC = () => {

  const { abkhaziaColor } = useContext(ColorContext)
  const { abkhaziaDiff } = useContext(DiffContext)

return (
<g className={'abkhazia'}>
  <style jsx>{`
  .abkhazia {
  fill: ${abkhaziaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ab" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(abkhaziaColor)}/>
  </pattern>
</defs>
{(abkhaziaDiff == 1) ?
<circle fill="url(#ab)" r="3.5" cy="227" cx="1199" stroke="black"/>
:
<circle r="3.5" cy="227" cx="1199" stroke="black"/>
}
</g>
)
}

export default Abkhazia