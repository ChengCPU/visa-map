import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintHelena:React.FC = () => {

  const { saintHelenaColor } = useContext(ColorContext)
  const { saintHelenaDiff } = useContext(DiffContext)

return (
<g className={'saintHelena'}>
  <style jsx>{`
  .saintHelena {
  fill: ${saintHelenaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sh" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintHelenaColor)}/>
  </pattern>
</defs>
{(saintHelenaDiff == 1) ?
<circle fill="url(#sh)" r="5" cy="600" cx="947" stroke="black"/>
:
<circle r="5" cy="600" cx="947" stroke="black"/>
}
</g>
)
}

export default SaintHelena