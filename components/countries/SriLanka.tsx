import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SriLanka:React.FC = () => {

  const { sriLankaColor } = useContext(ColorContext)

return (
<g className={'sriLanka'}>
  <style jsx>{`
  .sriLanka {
  fill: ${sriLankaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z" stroke="black"/>
</g>
)
}

export default SriLanka