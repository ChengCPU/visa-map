import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Ghana:React.FC = () => {

  const { ghanaColor } = useContext(ColorContext)
  const { GH } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'ghana'} onMouseOver={() => setCountrySelect('ghana')}>
  <style jsx>{`
  .ghana {
  fill: ${ghanaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gh" x="0" y="0" width="1" height="1" viewBox="0 20 18 18">
    <image width="1500" height="1500" xlinkHref={gridCalculation(ghanaColor)}/>
  </pattern>
</defs>
{(GH == 1) ?
<path fill="url(#gh)" d="M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z" stroke="black"/>
:
<path d="M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z" stroke="black"/>
}
</g>
)
}

export default Ghana