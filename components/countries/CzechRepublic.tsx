import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CzechRepublic:React.FC = () => {

  const { czechRepublicColor } = useContext(ColorContext)

return (
<g className={'czechRepublic'}>
  <style jsx>{`
  .czechRepublic {
  fill: ${czechRepublicColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1059.7 175.2l2.5 2 3.7 0.5-0.2 1.7 2.8 1.3 0.6-1.6 3.4 0.7 0.7 2 3.7 0.3 2.6 3.1-1.5 0-0.7 1.1-1.1 0.3-0.2 1.4-0.9 0.3-0.1 0.6-1.6 0.6-2.2-0.1-0.6 1.4-2.4-1.2-2.3 0.3-4-1.9-1.7 0.5-2.6 2.6-3.8-2.1-3-2.6-2.6-1.5-0.7-2.7-1-1.8 3.4-1.3 1.7-1.6 3.5-1.2 1.1-1.2 1.3 0.7 2.2-0.6z" stroke="black"/>
</g>
)
}

export default CzechRepublic