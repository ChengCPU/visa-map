import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintPierreAndMiquelon:React.FC = () => {

  const { saintPierreAndMiquelonColor } = useContext(ColorContext)
  const { saintPierreAndMiquelonDiff } = useContext(DiffContext)

return (
<g className={'saintPierreAndMiquelon'}>
  <style jsx>{`
  .saintPierreAndMiquelon {
  fill: ${saintPierreAndMiquelonColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintPierreAndMiquelonColor)}/>
  </pattern>
</defs>
{(saintPierreAndMiquelonDiff == 1) ?
<circle fill="url(#pm)" r="5" cy="202" cx="707" stroke="black"/>
:
<circle r="5" cy="202" cx="707" stroke="black"/>
}
</g>
)
}

export default SaintPierreAndMiquelon