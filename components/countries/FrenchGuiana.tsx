import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const FrenchGuiana:React.FC = () => {

  const { frenchGuianaColor } = useContext(ColorContext)

return (
<g className={'frenchGuiana'}>
  <style jsx>{`
  .frenchGuiana {
  fill: ${frenchGuianaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z" stroke="black"/>
</g>
)
}

export default FrenchGuiana