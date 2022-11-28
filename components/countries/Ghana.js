import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Ghana = () => {

  const { ghanaColor } = useContext(ColorContext)

return (
<g className={'ghana'}>
  <style jsx>{`
  .ghana {
  fill: ${ghanaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z" stroke="black"/>
</g>
)
}

export default Ghana