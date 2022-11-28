import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Niue = () => {

  const { niueColor } = useContext(ColorContext)

return (
<g className={'niue'}>
  <style jsx>{`
  .niue {
  fill: ${niueColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="615" cx="32" stroke="black"/>
</g>
)
}

export default Niue