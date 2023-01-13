import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Anguilla:React.FC = () => {

  const { anguillaColor } = useContext(ColorContext)
  const { anguillaDiff } = useContext(DiffContext)

return (
<g className={'anguilla'}>
  <style jsx>{`
  .anguilla {
  fill: ${anguillaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ai" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(anguillaDiff == 1) ?
<circle fill="url(#ai)" r="2.5" cy="380" cx="635" stroke="black"/>
:
<circle r="2.5" cy="380" cx="635" stroke="black"/>
}
</g>
)
}
  
export default Anguilla