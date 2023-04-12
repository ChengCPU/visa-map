import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintKittsAndNevis:React.FC = () => {

  const { saintKittsAndNevisColor } = useContext(ColorContext)
  const { saintKittsAndNevisDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintKittsAndNevis'} onMouseOver={() => setCountrySelect('saintKittsAndNevis')}>
  <style jsx>{`
  .saintKittsAndNevis {
  fill: ${saintKittsAndNevisColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="0" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridoecsfom.png"/>
  </pattern>
  <pattern id="kn" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintKittsAndNevisColor)}/>
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