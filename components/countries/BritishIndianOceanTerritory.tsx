import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const BritishIndianOceanTerritory:React.FC = () => {

  const { britishIndianOceanTerritoryColor } = useContext(ColorContext)
  const { IO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'britishIndianOceanTerritory'} onMouseOver={() => setCountrySelect('britishIndianOceanTerritory')}>
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
{(IO == 1) ?
<circle fill="url(#io)" r="5" cy="550" cx="1395" stroke="black"/>
:
<circle r="5" cy="550" cx="1395" stroke="black"/>
}
</g>
)
}

export default BritishIndianOceanTerritory