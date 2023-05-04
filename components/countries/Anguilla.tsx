import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Anguilla:React.FC = () => {

  const { anguillaColor } = useContext(ColorContext)
  const { AI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'anguilla'} onMouseOver={() => setCountrySelect('anguilla')}>
  <style jsx>{`
  .anguilla {
  fill: ${anguillaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ai" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(anguillaColor)}/>
  </pattern>
</defs>
{(AI == 1) ?
<circle fill="url(#ai)" r="2.5" cy="380" cx="635" stroke="black"/>
:
<circle r="2.5" cy="380" cx="635" stroke="black"/>
}
</g>
)
}
  
export default Anguilla