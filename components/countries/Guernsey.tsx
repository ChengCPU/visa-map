import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Guernsey:React.FC = () => {

  const { guernseyColor } = useContext(ColorContext)
  const { GG } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guernsey'} onMouseOver={() => setCountrySelect('guernsey')}>
  <style jsx>{`
  .guernsey {
  fill: ${guernseyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gg" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(guernseyColor)}/>
  </pattern>
</defs>
{(GG == 1) ?
<circle fill="url(#gg)" r="4" cy="185" cx="965" stroke="black"/>
:
<circle r="4" cy="185" cx="965" stroke="black"/>
}
</g>
)
}

export default Guernsey