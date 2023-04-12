import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Tokelau:React.FC = () => {

  const { tokelauColor } = useContext(ColorContext)
  const { tokelauDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tokelau'} onMouseOver={() => setCountrySelect('tokelau')}>
  <style jsx>{`
  .tokelau {
  fill: ${tokelauColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tk" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(tokelauColor)}/>
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