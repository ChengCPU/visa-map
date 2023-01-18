import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const VaticanCity:React.FC = () => {

  const { vaticanCityColor } = useContext(ColorContext)
  const { vaticanCityDiff } = useContext(DiffContext)

return (
<g className={'vaticanCity'}>
  <style jsx>{`
  .vaticanCity {
  fill: ${vaticanCityColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="va" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(vaticanCityColor)}/>
  </pattern>
</defs>
{(vaticanCityDiff == 1) ?
<circle fill="url(#va)" r="4" cy="235" cx="1053" stroke="black"/>
:
<circle r="4" cy="235" cx="1053" stroke="black"/>
}
</g>
)
}

export default VaticanCity