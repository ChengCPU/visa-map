import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintVincentAndTheGrenadines:React.FC = () => {

  const { saintVincentAndTheGrenadinesColor } = useContext(ColorContext)
  const { VC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintVincentAndTheGrenadines'} onMouseOver={() => setCountrySelect('saintVincentAndTheGrenadines')}>
  <style jsx>{`
  .saintVincentAndTheGrenadines {
  fill: ${saintVincentAndTheGrenadinesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="vc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintVincentAndTheGrenadinesColor)}/>
  </pattern>
</defs>
{(VC == 1) ?
<circle fill="url(#vc)" r="3.25" cy="426" cx="645" stroke="black"/>
:
<circle r="3.25" cy="426" cx="645" stroke="black"/>
}
</g>
)
}

export default SaintVincentAndTheGrenadines