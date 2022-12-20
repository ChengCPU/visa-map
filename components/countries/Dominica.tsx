import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Dominica:React.FC = () => {

  const { dominicaColor } = useContext(ColorContext)

return (
<g className={'dominica'}>
  <style jsx>{`
  .dominica {
  fill: ${dominicaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.25" cy="409" cx="643" stroke="black"/>
</g>
)
}

export default Dominica