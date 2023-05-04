import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const DominicanRepublic:React.FC = () => {

  const { dominicanRepublicColor } = useContext(ColorContext)
  const { DO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'dominicanRepublic'} onMouseOver={() => setCountrySelect('dominicanRepublic')}>
  <style jsx>{`
  .dominicanRepublic {
  fill: ${dominicanRepublicColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="do" x="0" y="0" width="1" height="1" viewBox="5 0 12 12">
    <image width="1500" height="1500" xlinkHref={gridCalculation(dominicanRepublicColor)}/>
  </pattern>
</defs>
{(DO == 1) ?
<path fill="url(#do)" d="M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z" stroke="black"/>
:
<path d="M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z" stroke="black"/>
}
</g>
)
}

export default DominicanRepublic