import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Guam:React.FC = () => {

  const { guamColor } = useContext(ColorContext)
  const { guamDiff } = useContext(DiffContext)

return (
<g className={'guam'}>
  <style jsx>{`
  .guam {
  fill: ${guamColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gu" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(guamDiff == 1) ?
<circle fill="url(#gu)" r="5" cy="414" cx="1800" stroke="black"/>
:
<circle r="5" cy="414" cx="1800" stroke="black"/>
}
</g>
)
}

export default Guam