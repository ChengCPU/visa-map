import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Bonaire:React.FC = () => {

  const { bonaireColor } = useContext(ColorContext)
  const { bonaireDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'bonaire'} onMouseOver={() => setCountrySelect('bonaire')}>
  <style jsx>{`
  .bonaire {
  fill: ${bonaireColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xb" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bonaireColor)}/>
  </pattern>
</defs>
{(bonaireDiff == 1) ?
<circle fill="url(#xb)" r="2.5" cy="424" cx="606" stroke="black"/>
:
<circle r="2.5" cy="424" cx="606" stroke="black"/>
}
</g>
)
}

export default Bonaire