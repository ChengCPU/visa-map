import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Saba:React.FC = () => {

  const { sabaColor } = useContext(ColorContext)

return (
<g className={'saba'}>
  <style jsx>{`
  .saba {
  fill: ${sabaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="392" cx="624" stroke="black"/>
</g>
)
}

export default Saba