import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Togo:React.FC = () => {

  const { togoColor } = useContext(ColorContext)
  const { TG } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'togo'} onMouseOver={() => setCountrySelect('togo')}>
  <style jsx>{`
  .togo {
  fill: ${togoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tg" x="0" y="0" width="1" height="1" viewBox="0 10 9 9">
    <image width="1500" height="1500" xlinkHref={gridCalculation(togoColor)}/>
  </pattern>
</defs>
{(TG == 1) ?
<path fill="url(#tg)" d="M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z" stroke="black"/>
:
<path d="M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z" stroke="black"/>
}
</g>
)
}

export default Togo