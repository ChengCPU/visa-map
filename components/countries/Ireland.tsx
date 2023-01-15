import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Ireland:React.FC = () => {

  const { irelandColor } = useContext(ColorContext)
  const { irelandDiff } = useContext(DiffContext)

return (
<g className={'ireland'}>
  <style jsx>{`
  .ireland {
  fill: ${irelandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ie" x="0" y="0" width="1" height="1" viewBox="0 0 15 15">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(irelandDiff == 1) ?
<path fill="url(#ie)" d="M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z" stroke="black"/>
:
<path d="M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z" stroke="black"/>
}
</g>
)
}

export default Ireland