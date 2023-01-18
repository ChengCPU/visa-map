import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Montserrat:React.FC = () => {

  const { montserratColor } = useContext(ColorContext)
  const { montserratDiff } = useContext(DiffContext)

return (
<g className={'montserrat'}>
  <style jsx>{`
  .montserrat {
  fill: ${montserratColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ms" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(montserratColor)}/>
  </pattern>
</defs>
{(montserratDiff == 1) ?
<circle fill="url(#ms)" r="2.5" cy="401" cx="637" stroke="black"/>
:
<circle r="2.5" cy="401" cx="637" stroke="black"/>
}
</g>
)
}

export default Montserrat