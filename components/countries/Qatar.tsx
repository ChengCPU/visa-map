import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Qatar:React.FC = () => {

  const { qatarColor } = useContext(ColorContext)

return (
<g className={'qatar'}>
  <style jsx>{`
  .qatar {
  fill: ${qatarColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z" />
<circle r="5" cy="339.5" cx="1270" stroke="black"/>
</g>
)
}

export default Qatar