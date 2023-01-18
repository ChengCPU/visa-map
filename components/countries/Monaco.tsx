import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Monaco:React.FC = () => {

  const { monacoColor } = useContext(ColorContext)
  const { monacoDiff } = useContext(DiffContext)

return (
<g className={'monaco'}>
  <style jsx>{`
  .monaco {
  fill: ${monacoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(monacoColor)}/>
  </pattern>
</defs>
{(monacoDiff == 1) ?
<circle fill="url(#mc)" r="4" cy="224" cx="1021" stroke="black"/>
:
<circle r="4" cy="224" cx="1021" stroke="black"/>
}
</g>
)
}

export default Monaco