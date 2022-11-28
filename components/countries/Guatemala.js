import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guatemala = () => {

  const { guatemalaColor } = useContext(ColorContext)

return (
<g className={'guatemala'}>
  <style jsx>{`
  .guatemala {
  fill: ${guatemalaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M488.1 387.5l-0.7 5.1-1.3 7.2 1.7 0 1.7 1.2 0.6-1 1.5 0.8-2.8 2.5-2.9 1.8-0.5 1.2 0.3 1.3-1.3 1.6-1.4 0.4 0.3 0.8-1.2 0.7-2 1.6-0.3 0.9-2.8-1.1-3.5-0.1-2.4-1.3-2.8-2.6 0.4-1.9 0.8-1.5-0.7-1.2 3.3-5.2 7.2 0 0.4-2.2-0.8-0.4-0.5-1.4-1.9-1.5-1.8-2.1 2.5-0.1 0.5-3.6 5.2 0 5.2 0.1z" stroke="black"/>
</g>
)
}

export default Guatemala