import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const CookIslands:React.FC = () => {

  const { cookIslandsColor } = useContext(ColorContext)
  const { cookIslandsDiff } = useContext(DiffContext)

return (
<g className={'cookIslands'}>
  <style jsx>{`
  .cookIslands {
  fill: ${cookIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ck" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(cookIslandsColor)}/>
  </pattern>
</defs>
{(cookIslandsDiff == 1) ?
<circle fill="url(#ck)" r="5" cy="631" cx="100" stroke="black"/>
:
<circle r="5" cy="631" cx="100" stroke="black"/>
}
</g>
)
}

export default CookIslands