import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintMartin:React.FC = () => {

  const { saintMartinColor } = useContext(ColorContext)
  const { saintMartinDiff } = useContext(DiffContext)

return (
<g className={'saintMartin'}>
  <style jsx>{`
  .saintMartin {
  fill: ${saintMartinColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mf" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintMartinColor)}/>
  </pattern>
</defs>
{(saintMartinDiff == 1) ?
<circle fill="url(#mf)" r="2.5" cy="379" cx="630" stroke="black"/>
:
<circle r="2.5" cy="379" cx="630" stroke="black"/>
}
</g>
)
}

export default SaintMartin