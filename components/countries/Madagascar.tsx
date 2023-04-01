import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Madagascar:React.FC = () => {

  const { madagascarColor } = useContext(ColorContext)
  const { madagascarDiff } = useContext(DiffContext)

return (
<g className={'madagascar'}>
  <style jsx>{`
  .madagascar {
  fill: ${madagascarColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mg" x="0" y="0" width="1" height="1" viewBox="0 20 30 30">
    <image width="1500" height="1500" xlinkHref={gridCalculation(madagascarColor)}/>
  </pattern>
</defs>
{(madagascarDiff == 1) ?
<path fill="url(#mg)" d="M1267.9 588.9l0.4 7.7 1.3 3-0.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9 0.8 4.7-0.7 2.8-1.7 1.4-0.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4 0-5.7-1.5-5.1-0.2-4.7 1.3-4.6 2.6-1.1 0.2-2.1 2.9-4.9 0.8-4.1-1.1-3-0.8-4.1-0.1-5.9 2.2-3.6 1-4.1 2.8-0.2 3.2-1.3 2.2-1.2 2.4-0.1 3.4-3.6 4.9-4 1.8-3.2-0.6-2.8 2.4 0.8 3.3-4.4 0.3-3.9 2-2.9 1.8 2.8 1.4 2.7 1.2 4.3z" stroke="black"/>
:
<path d="M1267.9 588.9l0.4 7.7 1.3 3-0.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9 0.8 4.7-0.7 2.8-1.7 1.4-0.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4 0-5.7-1.5-5.1-0.2-4.7 1.3-4.6 2.6-1.1 0.2-2.1 2.9-4.9 0.8-4.1-1.1-3-0.8-4.1-0.1-5.9 2.2-3.6 1-4.1 2.8-0.2 3.2-1.3 2.2-1.2 2.4-0.1 3.4-3.6 4.9-4 1.8-3.2-0.6-2.8 2.4 0.8 3.3-4.4 0.3-3.9 2-2.9 1.8 2.8 1.4 2.7 1.2 4.3z" stroke="black"/>
}
</g>
)
}

export default Madagascar