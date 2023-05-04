import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Transnistria:React.FC = () => {

  const { transnistriaColor } = useContext(ColorContext)
  const { XT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'transnistria'} onMouseOver={() => setCountrySelect('transnistria')}>
  <style jsx>{`
  .transnistria {
  fill: ${transnistriaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(transnistriaColor)}/>
  </pattern>
</defs>
{(XT == 1) ?
<circle fill="url(#xt)" r="2.5" cy="198" cx="1132.7" stroke="black"/>
:
<circle r="2.5" cy="198" cx="1132.7" stroke="black"/>
}
</g>
)
}

export default Transnistria