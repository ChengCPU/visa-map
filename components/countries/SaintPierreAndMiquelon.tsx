import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintPierreAndMiquelon:React.FC = () => {

  const { saintPierreAndMiquelonColor } = useContext(ColorContext)

return (
<g className={'saintPierreAndMiquelon'}>
  <style jsx>{`
  .saintPierreAndMiquelon {
  fill: ${saintPierreAndMiquelonColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="202" cx="707" stroke="black"/>
</g>
)
}

export default SaintPierreAndMiquelon