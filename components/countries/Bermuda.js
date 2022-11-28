import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Bermuda = () => {

  const { bermudaColor } = useContext(ColorContext)

return (
<g className={'bermuda'}>
  <style jsx>{`
  .bermuda {
  fill: ${bermudaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="294" cx="637" stroke="black"/>
</g>
)
}

export default Bermuda