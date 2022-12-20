import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Liechtenstein:React.FC = () => {

  const { liechtensteinColor } = useContext(ColorContext)

return (
<g className={'liechtenstein'}>
  <style jsx>{`
  .liechtenstein {
  fill: ${liechtensteinColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="200" cx="1038" stroke="black"/>
</g>
)
}

export default Liechtenstein