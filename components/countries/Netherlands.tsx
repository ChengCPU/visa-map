import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Netherlands:React.FC = () => {

  const { netherlandsColor } = useContext(ColorContext)
  const { netherlandsDiff } = useContext(DiffContext)

return (
<g className={'netherlands'}>
  <style jsx>{`
  .netherlands {
  fill: ${netherlandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nl" x="0" y="0" width="1" height="1" viewBox="0 0 15 15">
    <image width="1500" height="1500" xlinkHref={gridCalculation(netherlandsColor)}/>
  </pattern>
</defs>
{(netherlandsDiff == 1) ?
<path fill="url(#nl)" d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z" stroke="black"/>
:
<path d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z" stroke="black"/>
}
</g>
)
}

export default Netherlands