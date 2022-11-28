import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Martinique = () => {

  const { martiniqueColor } = useContext(ColorContext)

return (
<g className={'martinique'}>
  <style jsx>{`
  .martinique {
  fill: ${martiniqueColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="413" cx="648" stroke="black"/>
</g>
)
}

export default Martinique