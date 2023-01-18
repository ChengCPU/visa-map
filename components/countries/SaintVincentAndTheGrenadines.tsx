import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintVincentAndTheGrenadines:React.FC = () => {

  const { saintVincentAndTheGrenadinesColor } = useContext(ColorContext)
  const { saintVincentAndTheGrenadinesDiff } = useContext(DiffContext)

return (
<g className={'saintVincentAndTheGrenadines'}>
  <style jsx>{`
  .saintVincentAndTheGrenadines {
  fill: ${saintVincentAndTheGrenadinesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="vc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintVincentAndTheGrenadinesColor)}/>
  </pattern>
</defs>
{(saintVincentAndTheGrenadinesDiff == 1) ?
<circle fill="url(#vc)" r="3.25" cy="426" cx="645" stroke="black"/>
:
<circle r="3.25" cy="426" cx="645" stroke="black"/>
}
</g>
)
}

export default SaintVincentAndTheGrenadines