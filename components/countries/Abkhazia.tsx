import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Abkhazia:React.FC = () => {

  const { abkhaziaColor } = useContext(ColorContext)

return (
<g className={'abkhazia'}>
  <style jsx>{`
  .abkhazia {
  fill: ${abkhaziaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.5" cy="227" cx="1199" stroke="black"/>
</g>
)
}

export default Abkhazia