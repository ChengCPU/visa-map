import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintKittsAndNevis:React.FC = () => {

  const { saintKittsAndNevisColor } = useContext(ColorContext)

return (
<g className={'saintKittsAndNevis'}>
  <style jsx>{`
  .saintKittsAndNevis {
  fill: ${saintKittsAndNevisColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.25" cy="395" cx="635" stroke="black"/>
</g>
)
}

export default SaintKittsAndNevis