import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Singapore:React.FC = () => {

  const { singaporeColor } = useContext(ColorContext)

return (
<g className={'singapore'}>
  <style jsx>{`
  .singapore {
  fill: ${singaporeColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="492" cx="1575" stroke="black"/>
</g>
)
}

export default Singapore