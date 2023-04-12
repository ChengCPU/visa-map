import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Brunei:React.FC = () => {

  const { bruneiColor } = useContext(ColorContext)
  const { bruneiDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'brunei'} onMouseOver={() => setCountrySelect('brunei')}>
  <style jsx>{`
  .brunei {
  fill: ${bruneiColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bn" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bruneiColor)}/>
  </pattern>
</defs>
{(bruneiDiff == 1) ?
<>
<path fill="url(#bn)" d="M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z" />
<circle fill="url(#bn)" r="5" cy="472" cx="1637.5" stroke="black"/>
</>
:
<>
<path d="M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z" />
<circle r="5" cy="472" cx="1637.5" stroke="black"/>
</>
}
</g>
)
}

export default Brunei
