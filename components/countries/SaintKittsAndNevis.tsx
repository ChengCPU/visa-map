import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const SaintKittsAndNevis:React.FC = () => {

  const { saintKittsAndNevisColor } = useContext(ColorContext)
  const { saintKittsAndNevisDiff } = useContext(DiffContext)

return (
<g className={'saintKittsAndNevis'}>
  <style jsx>{`
  .saintKittsAndNevis {
  fill: ${saintKittsAndNevisColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="kn" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(saintKittsAndNevisDiff == 1) ?
<circle fill="url(#kn)" r="3.25" cy="395" cx="635" stroke="black"/>
:
<circle r="3.25" cy="395" cx="635" stroke="black"/>
}
</g>
)
}

export default SaintKittsAndNevis