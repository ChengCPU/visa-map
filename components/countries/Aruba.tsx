import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Aruba:React.FC = () => {

  const { arubaColor } = useContext(ColorContext)

return (
<g className={'aruba'}>
  <style jsx>{`
  .aruba {
  fill: ${arubaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="422" cx="590" stroke="black"/>
</g>
)
}

export default Aruba