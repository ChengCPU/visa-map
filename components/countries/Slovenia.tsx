import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Slovenia:React.FC = () => {

  const { sloveniaColor } = useContext(ColorContext)
  const { sloveniaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'slovenia'} onMouseOver={() => setCountrySelect('slovenia')}>
  <style jsx>{`
  .slovenia {
  fill: ${sloveniaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="si" x="0" y="0" width="1" height="1" viewBox="10 0 8 8">
    <image width="1500" height="1500" xlinkHref={gridCalculation(sloveniaColor)}/>
  </pattern>
</defs>
{(sloveniaDiff == 1) ?
<path fill="url(#si)" d="M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z" stroke="black"/>
:
<path d="M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z" stroke="black"/>
}
</g>
)
}

export default Slovenia