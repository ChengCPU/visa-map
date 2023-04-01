import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Morocco:React.FC = () => {

  const { moroccoColor } = useContext(ColorContext)
  const { moroccoDiff } = useContext(DiffContext)

return (
<g className={'morocco'}>
  <style jsx>{`
  .morocco {
  fill: ${moroccoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ma" x="0" y="0" width="1" height="1" viewBox="0 0 58 58">
    <image width="1500" height="1500" xlinkHref={gridCalculation(moroccoColor)}/>
  </pattern>
</defs>
{(moroccoDiff == 1) ?
<path fill="url(#ma)" d="M974.8 276l1.9 4.1 0.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1 0.6-0.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-0.1 7.6-0.9 0 0.1 3.4-3.4 0.2-1.8 1.5-2.5 0-2-0.9-4.6 0.7-1.9 5-1.8 0.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-0.7 2.3-12.5 0.5-0.1 0 0.3-3 2.2-1.7 1.9-3.4-0.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7 0.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5 0.1-0.1 2.9-2.5 5.1-0.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6 0.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9 0.1 3.1 2.7 5.1-0.4 5.5 1.4 2.4 0z" stroke="black"/>
:
<path d="M974.8 276l1.9 4.1 0.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1 0.6-0.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-0.1 7.6-0.9 0 0.1 3.4-3.4 0.2-1.8 1.5-2.5 0-2-0.9-4.6 0.7-1.9 5-1.8 0.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-0.7 2.3-12.5 0.5-0.1 0 0.3-3 2.2-1.7 1.9-3.4-0.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7 0.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5 0.1-0.1 2.9-2.5 5.1-0.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6 0.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9 0.1 3.1 2.7 5.1-0.4 5.5 1.4 2.4 0z" stroke="black"/>
}
</g>
)
}

export default Morocco