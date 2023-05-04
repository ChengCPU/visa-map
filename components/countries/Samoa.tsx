import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Samoa:React.FC = () => {

  const { samoaColor } = useContext(ColorContext)
  const { WS } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'samoa'} onMouseOver={() => setCountrySelect('samoa')}>
  <style jsx>{`
  .samoa {
  fill: ${samoaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ws" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(samoaColor)}/>
  </pattern>
</defs>
{(WS == 1) ?
<circle fill="url(#ws)" r="5" cy="590" cx="20" stroke="black"/>
:
<circle r="5" cy="590" cx="20" stroke="black"/>
}
</g>
)
}

export default Samoa