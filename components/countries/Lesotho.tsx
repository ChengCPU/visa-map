import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Lesotho:React.FC = () => {

  const { lesothoColor } = useContext(ColorContext)
  const { lesothoDiff } = useContext(DiffContext)

return (
<g className={'lesotho'}>
  <style jsx>{`
  .lesotho {
  fill: ${lesothoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ls" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(lesothoColor)}/>
  </pattern>
</defs>
{(lesothoDiff == 1) ?
<>
<path fill="url(#ls)" d="M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z" />
<circle fill="url(#ls)" r="5" cy="692" cx="1140" stroke="black"/>
</>
:
<>
<path d="M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z" />
<circle r="5" cy="692" cx="1140" stroke="black"/>
</>
}
</g>
)
}

export default Lesotho