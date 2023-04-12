import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Mayotte:React.FC = () => {

  const { mayotteColor } = useContext(ColorContext)
  const { mayotteDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'mayotte'} onMouseOver={() => setCountrySelect('mayotte')}>
  <style jsx>{`
  .mayotte {
  fill: ${mayotteColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="yt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(mayotteColor)}/>
  </pattern>
</defs>
{(mayotteDiff == 1) ?
<circle fill="url(#yt)" r="4" cy="585" cx="1242" stroke="black"/>
:
<circle r="4" cy="585" cx="1242" stroke="black"/>
}
</g>
)
}

export default Mayotte