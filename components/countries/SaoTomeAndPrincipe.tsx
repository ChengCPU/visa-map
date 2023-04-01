import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SaoTomeAndPrincipe:React.FC = () => {

  const { saoTomeAndPrincipeColor } = useContext(ColorContext)
  const { saoTomeAndPrincipeDiff } = useContext(DiffContext)

return (
<g className={'saoTomeAndPrincipe'}>
  <style jsx>{`
  .saoTomeAndPrincipe {
  fill: ${saoTomeAndPrincipeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="st" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saoTomeAndPrincipeColor)}/>
  </pattern>
</defs>
{(saoTomeAndPrincipeDiff == 1) ?
<circle fill="url(#st)" r="5" cy="500" cx="1025" stroke="black"/>
:
<circle r="5" cy="500" cx="1025" stroke="black"/>
}
</g>
)
}

export default SaoTomeAndPrincipe