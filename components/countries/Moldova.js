import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Moldova = () => {

  const { moldovaColor } = useContext(ColorContext)

return (
<g className={'moldova'}>
  <style jsx>{`
  .moldova {
  fill: ${moldovaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z" />
</g>
)
}

export default Moldova