import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Bermuda:React.FC = () => {

  const { bermudaColor } = useContext(ColorContext)
  const { BM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'bermuda'} onMouseOver={() => setCountrySelect('bermuda')}>
  <style jsx>{`
  .bermuda {
  fill: ${bermudaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bermudaColor)}/>
  </pattern>
</defs>
{(BM == 1) ?
<circle fill="url(#bm)" r="5" cy="294" cx="637" stroke="black"/>
:
<circle r="5" cy="294" cx="637" stroke="black"/>
}
</g>
)
}

export default Bermuda