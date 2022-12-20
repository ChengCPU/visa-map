import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Zimbabwe:React.FC = () => {

  const { zimbabweColor } = useContext(ColorContext)

return (
<g className={'zimbabwe'}>
  <style jsx>{`
  .zimbabwe {
  fill: ${zimbabweColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1159.4 644.7l-2.9-0.7-1.9 0.8-2.7-1.1-2.2 0-3.4-2.9-4.3-1-1.5-4.1 0.1-2.3-2.3-0.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2 0.7 1.8 0.7 1.9-0.1 3.2-4.2 5.1-5.2 2-0.6 0.8-2.2 3.3-2.5 4.3-0.9 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3z" stroke="black"/>
</g>
)
}

export default Zimbabwe