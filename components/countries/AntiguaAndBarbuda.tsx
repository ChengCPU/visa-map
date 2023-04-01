import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const AntiguaAndBarbuda:React.FC = () => {

  const { antiguaAndBarbudaColor } = useContext(ColorContext)
  const { antiguaAndBarbudaDiff } = useContext(DiffContext)

return (
<g className={'antiguaAndBarbuda'}>
  <style jsx>{`
  .antiguaAndBarbuda {
  fill: ${antiguaAndBarbudaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ag" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(antiguaAndBarbudaColor)}/>
  </pattern>
</defs>
{(antiguaAndBarbudaDiff == 1) ?
<circle fill="url(#ag)" r="3.25" cy="397" cx="642" stroke="black"/>
:
<circle r="3.25" cy="397" cx="642" stroke="black"/>
}
</g>
)
}

export default AntiguaAndBarbuda