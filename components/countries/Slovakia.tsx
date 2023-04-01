import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Slovakia:React.FC = () => {

  const { slovakiaColor } = useContext(ColorContext)
  const { slovakiaDiff } = useContext(DiffContext)

return (
<g className={'slovakia'}>
  <style jsx>{`
  .slovakia {
  fill: ${slovakiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sk" x="0" y="0" width="1" height="1" viewBox="10 0 9 9">
    <image width="1500" height="1500" xlinkHref={gridCalculation(slovakiaColor)}/>
  </pattern>
</defs>
{(slovakiaDiff == 1) ?
<path fill="url(#sk)" d="M1098.1 187.7l-1.2 1.7-0.7 2.5-1 0.6-5.5-1.9-1.6 0.4-1 1.5-2.3 0.8-0.6-0.4-2.3 0.9-1.9 0.2-0.3 1.3-4.1 0.7-1.9-0.6-2.7-1.7-0.7-2.1 0.3-0.8 0.6-1.4 2.2 0.1 1.6-0.6 0.1-0.6 0.9-0.3 0.2-1.4 1.1-0.3 0.7-1.1 1.5 0 0.3 0.4 1.9-0.9 2.7 2.2 2.8-1.3 2.4 0.6 3.5-0.9 5 2.4z" stroke="black"/>
:
<path d="M1098.1 187.7l-1.2 1.7-0.7 2.5-1 0.6-5.5-1.9-1.6 0.4-1 1.5-2.3 0.8-0.6-0.4-2.3 0.9-1.9 0.2-0.3 1.3-4.1 0.7-1.9-0.6-2.7-1.7-0.7-2.1 0.3-0.8 0.6-1.4 2.2 0.1 1.6-0.6 0.1-0.6 0.9-0.3 0.2-1.4 1.1-0.3 0.7-1.1 1.5 0 0.3 0.4 1.9-0.9 2.7 2.2 2.8-1.3 2.4 0.6 3.5-0.9 5 2.4z" stroke="black"/>
}
</g>
)
}

export default Slovakia