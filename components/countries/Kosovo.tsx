import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Kosovo:React.FC = () => {

  const { kosovoColor } = useContext(ColorContext)
  const { kosovoDiff } = useContext(DiffContext)

return (
<g className={'kosovo'}>
  <style jsx>{`
  .kosovo {
  fill: ${kosovoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xk" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(kosovoColor)}/>
  </pattern>
</defs>
{(kosovoDiff == 1) ?
<circle fill="url(#xk)" r="4" cy="228" cx="1095" stroke="black"/>
:
<circle r="4" cy="228" cx="1095" stroke="black"/>
}
</g>
)
}

export default Kosovo