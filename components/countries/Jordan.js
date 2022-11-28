import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Jordan = () => {

  const { jordanColor } = useContext(ColorContext)

return (
<g className={'jordan'}>
  <style jsx>{`
  .jordan {
  fill: ${jordanColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z" stroke="black"/>
</g>
)
}

export default Jordan