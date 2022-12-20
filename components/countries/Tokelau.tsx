import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Tokelau:React.FC = () => {

  const { tokelauColor } = useContext(ColorContext)

return (
<g className={'tokelau'}>
  <style jsx>{`
  .tokelau {
  fill: ${tokelauColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="560" cx="25" stroke="black"/>
</g>
)
}

export default Tokelau