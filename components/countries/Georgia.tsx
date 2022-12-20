import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Georgia:React.FC = () => {

  const { georgiaColor } = useContext(ColorContext)

return (
<g className={'georgia'}>
  <style jsx>{`
  .georgia {
  fill: ${georgiaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2 0.8 3.3 3.5-0.6 0.7-2.9-0.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5 0.3 0.3-2.7-2.1-4.3-3.4-2.4-3-0.7-2.2-1.9 0.4-0.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2 2.9-1z" stroke="black"/>
</g>
)
}

export default Georgia