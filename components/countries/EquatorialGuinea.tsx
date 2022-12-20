import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const EquatorialGuinea:React.FC = () => {

  const { equatorialGuineaColor } = useContext(ColorContext)

return (
<g className={'equatorialGuinea'}>
  <style jsx>{`
  .equatorialGuinea {
  fill: ${equatorialGuineaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z" />
<circle r="5" cy="491" cx="1045" stroke="black"/>
</g>
)
}

export default EquatorialGuinea