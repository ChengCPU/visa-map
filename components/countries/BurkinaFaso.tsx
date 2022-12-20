import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const BurkinaFaso:React.FC = () => {

  const { burkinaFasoColor } = useContext(ColorContext)

return (
<g className={'burkinaFaso'}>
  <style jsx>{`
  .burkinaFaso {
  fill: ${burkinaFasoColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M988.5 406l-0.5 3.1 0.8 2.9 3.1 4.2 0.2 3.1 6.5 1.5-0.1 4.4-1.2 1.9-2.8 0.6-1.1 2.8-2 0.7-4.9-0.1-2.6-0.5-1.8 1-2.5-0.5-9.8 0.3-0.2 3.7 0.8 4.8-3.9-1.6-2.6 0.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-0.4-3.7 1.6-2.7-0.2-2.2 4.5-5.3 0.9-4.4 1.5-1.6 2.7 0.9 2.4-1.3 0.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-0.9 1.4 1.2 3.6 0z" stroke="black"/>
</g>
)
}

export default BurkinaFaso