import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const BritishIndianOceanTerritory:React.FC = () => {

  const { britishIndianOceanTerritoryColor } = useContext(ColorContext)
  const { britishIndianOceanTerritoryDiff } = useContext(DiffContext)

return (
<g className={'britishIndianOceanTerritory'}>
  <style jsx>{`
  .britishIndianOceanTerritory {
  fill: ${britishIndianOceanTerritoryColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="io" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(britishIndianOceanTerritoryColor)}/>
  </pattern>
</defs>
{(britishIndianOceanTerritoryDiff == 1) ?
<circle fill="url(#io)" r="5" cy="550" cx="1395" stroke="black"/>
:
<circle r="5" cy="550" cx="1395" stroke="black"/>
}
</g>
)
}

export default BritishIndianOceanTerritory