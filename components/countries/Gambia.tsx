import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Gambia:React.FC = () => {

  const { gambiaColor } = useContext(ColorContext)
  const { GM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'gambia'} onMouseOver={() => setCountrySelect('gambia')}>
  <style jsx>{`
  .gambia {
  fill: ${gambiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gm" x="0" y="0" width="1" height="1" viewBox="20 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(gambiaColor)}/>
  </pattern>
</defs>
{(GM == 1) ?
<>
<path fill="url(#gm)" d="M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z" />
<circle fill="url(#gm)" r="5" cy="415" cx="900" stroke="black"/>
</>
:
<>
<path d="M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z" />
<circle r="5" cy="415" cx="900" stroke="black"/>
</>
}
</g>
)
}

export default Gambia