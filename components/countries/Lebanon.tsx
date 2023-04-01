import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Lebanon:React.FC = () => {

  const { lebanonColor } = useContext(ColorContext)
  const { lebanonDiff } = useContext(DiffContext)

return (
<g className={'lebanon'}>
  <style jsx>{`
  .lebanon {
  fill: ${lebanonColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lb" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(lebanonColor)}/>
  </pattern>
</defs>
{(lebanonDiff == 1) ?
<>
<path fill="url(#lb)" d="M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z" />
<circle fill="url(#lb)" r="4" cy="284" cx="1179" stroke="black"/>
</>
:
<>
<path d="M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z" />
<circle r="4" cy="284" cx="1179" stroke="black"/>
</>
}
</g>
)
}

export default Lebanon