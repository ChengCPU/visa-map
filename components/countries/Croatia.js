import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Croatia = () => {

  const { croatiaColor } = useContext(ColorContext)

return (
<g className={'croatia'}>
  <style jsx>{`
  .croatia {
  fill: ${croatiaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1081.5 207.6l1.5 2.5 1.7 1.8-1.7 2.4-2.4-1.4-3.5 0.1-4.5-1.1-2.3 0.1-1 1.4-2-1.5-0.8 2.6 2.7 3 1.3 1.9 2.5 2.4 2.1 1.4 2.1 2.7 4.8 2.4-0.5 1-5-2.3-3.2-2.3-4.8-1.9-4.7-4.6 1-0.5-2.5-2.7-0.3-2.1-3.3-1-1.4 2.7-1.6-2.1 0-2.2 0.1-0.1 3.6 0.2 0.8-1 1.8 1 2 0.1-0.1-1.7 1.7-0.7 0.3-2.5 3.9-1.7 1.6 0.8 4 2.7 4.3 1.2 1.8-1z" stroke="black"/>
</g>
)
}

export default Croatia