import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Transnistria:React.FC = () => {

  const { transnistriaColor } = useContext(ColorContext)

return (
<g className={'transnistria'}>
  <style jsx>{`
  .transnistria {
  fill: ${transnistriaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="198" cx="1132.7" stroke="black"/>
</g>
)
}

export default Transnistria