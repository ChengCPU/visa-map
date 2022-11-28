import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Seychelles = () => {

  const { seychellesColor } = useContext(ColorContext)

return (
<g className={'seychelles'}>
  <style jsx>{`
  .seychelles {
  fill: ${seychellesColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="531" cx="1300" stroke="black"/>
</g>
)
}

export default Seychelles