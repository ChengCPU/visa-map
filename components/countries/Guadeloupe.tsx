import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guadeloupe:React.FC = () => {

  const { guadeloupeColor } = useContext(ColorContext)

return (
<g className={'guadeloupe'}>
  <style jsx>{`
  .guadeloupe {
  fill: ${guadeloupeColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="403" cx="642" stroke="black"/>
</g>
)
}

export default Guadeloupe