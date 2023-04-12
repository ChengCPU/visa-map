import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const WallisAndFutuna:React.FC = () => {

  const { wallisAndFutunaColor } = useContext(ColorContext)
  const { wallisAndFutunaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'wallisAndFutuna'} onMouseOver={() => setCountrySelect('wallisAndFutuna')}>
  <style jsx>{`
  .wallisAndFutuna {
  fill: ${wallisAndFutunaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="wf" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(wallisAndFutunaColor)}/>
  </pattern>
</defs>
{(wallisAndFutunaDiff == 1) ?
<circle fill="url(#wf)" r="5" cy="590" cx="2015" stroke="black"/>
:
<circle r="5" cy="590" cx="2015" stroke="black"/>
}
</g>
)
}

export default WallisAndFutuna