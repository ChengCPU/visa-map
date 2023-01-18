import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintBarthelemy:React.FC = () => {

  const { saintBarthelemyColor } = useContext(ColorContext)
  const { saintBarthelemyDiff } = useContext(DiffContext)

return (
<g className={'saintBarthelemy'}>
  <style jsx>{`
  .saintBarthelemy {
  fill: ${saintBarthelemyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bl" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintBarthelemyColor)}/>
  </pattern>
</defs>
{(saintBarthelemyDiff == 1) ?
<circle fill="url(#bl)" r="2.5" cy="388" cx="627" stroke="black"/>
:
<circle r="2.5" cy="388" cx="627" stroke="black"/>
}
</g>
)
}

export default SaintBarthelemy