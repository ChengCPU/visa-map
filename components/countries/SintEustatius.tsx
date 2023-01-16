import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const SintEustatius:React.FC = () => {

  const { sintEustatiusColor } = useContext(ColorContext)
  const { sintEustatiusDiff } = useContext(DiffContext)

return (
<g className={'sintEustatius'}>
  <style jsx>{`
  .sintEustatius {
  fill: ${sintEustatiusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xe" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(sintEustatiusDiff == 1) ?
<circle fill="url(#xe)" r="2.5" cy="393.5" cx="629" stroke="black"/>
:
<circle r="2.5" cy="393.5" cx="629" stroke="black"/>
}
</g>
)
}

export default SintEustatius