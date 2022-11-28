import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintHelena = () => {

  const { saintHelenaColor } = useContext(ColorContext)

return (
<g className={'saintHelena'}>
  <style jsx>{`
  .saintHelena {
  fill: ${saintHelenaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="600" cx="947" stroke="black"/>
</g>
)
}

export default SaintHelena