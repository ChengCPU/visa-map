import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const EastTimor:React.FC = () => {

  const { eastTimorColor } = useContext(ColorContext)
  const { TL } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'eastTimor'} onMouseOver={() => setCountrySelect('eastTimor')}>
  <style jsx>{`
  .eastTimor {
  fill: ${eastTimorColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tl" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(eastTimorColor)}/>
  </pattern>
</defs>
{(TL == 1) ?
<>
<path fill="url(#tl)" d="M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z" />
<circle fill="url(#tl)" r="5" cy="558" cx="1699" stroke="black"/>
</>
:
<>
<path d="M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z" />
<circle r="5" cy="558" cx="1699" stroke="black"/>
</>
}
</g>
)
}

export default EastTimor