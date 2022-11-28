import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SierraLeone = () => {

  const { sierraLeoneColor } = useContext(ColorContext)

return (
<g className={'sierraLeone'}>
  <style jsx>{`
  .sierraLeone {
  fill: ${sierraLeoneColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z" stroke="black"/>
</g>
)
}

export default SierraLeone