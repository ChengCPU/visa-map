import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Guadeloupe:React.FC = () => {

  const { guadeloupeColor } = useContext(ColorContext)
  const { guadeloupeDiff } = useContext(DiffContext)

return (
<g className={'guadeloupe'}>
  <style jsx>{`
  .guadeloupe {
  fill: ${guadeloupeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gp" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(guadeloupeColor)}/>
  </pattern>
</defs>
{(guadeloupeDiff == 1) ?
<circle fill="url(#gp)" r="2.5" cy="403" cx="642" stroke="black"/>
:
<circle r="2.5" cy="403" cx="642" stroke="black"/>
}
</g>
)
}

export default Guadeloupe