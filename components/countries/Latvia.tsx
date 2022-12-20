import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Latvia:React.FC = () => {

  const { latviaColor } = useContext(ColorContext)

return (
<g className={'latvia'}>
  <style jsx>{`
  .latvia {
  fill: ${latviaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1112.8 136.5l2.5 1.3 1 2.9 2.1 3.6-4.6 2.3-2.7 1-5-2.9-2.5-0.4-0.9-1.2-4.5 0.6-7.9-0.4-5.1 1.8-0.5-4.5 1.7-3.8 4.1-2 4.4 4.5 3.7-0.2 0.1-4.6 3.8-1 2.1 0.7 4.4 2.2 3.8 0.1z" stroke="black"/>
</g>
)
}

export default Latvia