import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Niue:React.FC = () => {

  const { niueColor } = useContext(ColorContext)
  const { niueDiff } = useContext(DiffContext)

return (
<g className={'niue'}>
  <style jsx>{`
  .niue {
  fill: ${niueColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nu" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(niueDiff == 1) ?
<circle fill="url(#nu)" r="5" cy="615" cx="32" stroke="black"/>
:
<circle r="5" cy="615" cx="32" stroke="black"/>
}
</g>
)
}

export default Niue