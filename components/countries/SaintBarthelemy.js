import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintBarthelemy = () => {

  const { saintBarthelemyColor } = useContext(ColorContext)

return (
<g className={'saintBarthelemy'}>
  <style jsx>{`
  .saintBarthelemy {
  fill: ${saintBarthelemyColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="388" cx="627" stroke="black"/>
</g>
)
}

export default SaintBarthelemy