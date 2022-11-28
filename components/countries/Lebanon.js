import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Lebanon = () => {

  const { lebanonColor } = useContext(ColorContext)

return (
<g className={'lebanon'}>
  <style jsx>{`
  .lebanon {
  fill: ${lebanonColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z" />
<circle r="4" cy="284" cx="1179" stroke="black"/>
</g>
)
}

export default Lebanon