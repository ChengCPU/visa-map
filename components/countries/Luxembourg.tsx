import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Luxembourg:React.FC = () => {

  const { luxembourgColor } = useContext(ColorContext)

return (
<g className={'luxembourg'}>
  <style jsx>{`
  .luxembourg {
  fill: ${luxembourgColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="185" cx="1016" stroke="black"/>
</g>
)
}

export default Luxembourg