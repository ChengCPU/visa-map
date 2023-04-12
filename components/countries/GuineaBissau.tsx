import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const GuineaBissau:React.FC = () => {

  const { guineaBissauColor } = useContext(ColorContext)
  const { guineaBissauDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guineaBissau'} onMouseOver={() => setCountrySelect('guineaBissau')}>
  <style jsx>{`
  .guineaBissau {
  fill: ${guineaBissauColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gw" x="0" y="0" width="1" height="1" viewBox="10 0 7 7">
    <image width="1500" height="1500" xlinkHref={gridCalculation(guineaBissauColor)}/>
  </pattern>
</defs>
{(guineaBissauDiff == 1) ?
<path fill="url(#gw)" d="M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z" stroke="black"/>
:
<path d="M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z" stroke="black"/>
}
</g>
)
}

export default GuineaBissau