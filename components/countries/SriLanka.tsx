import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const SriLanka:React.FC = () => {

  const { sriLankaColor } = useContext(ColorContext)
  const { sriLankaDiff } = useContext(DiffContext)

return (
<g className={'sriLanka'}>
  <style jsx>{`
  .sriLanka {
  fill: ${sriLankaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lk" x="0" y="0" width="1" height="1" viewBox="0 10 9 9">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(sriLankaDiff == 1) ?
<path fill="url(#lk)" d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z" stroke="black"/>
:
<path d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z" stroke="black"/>
}
</g>
)
}

export default SriLanka