import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Cambodia:React.FC = () => {

  const { cambodiaColor } = useContext(ColorContext)
  const { cambodiaDiff } = useContext(DiffContext)

return (
<g className={'cambodia'}>
  <style jsx>{`
  .cambodia {
  fill: ${cambodiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="kh" x="0" y="0" width="1" height="1" viewBox="10 0 20 20">
    <image width="1500" height="1500" xlinkHref={gridCalculation(cambodiaColor)}/>
  </pattern>
</defs>
{(cambodiaDiff == 1) ?
<path fill="url(#kh)" d="M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z" stroke="black"/>
:
<path d="M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z" stroke="black"/>
}
</g>
)
}

export default Cambodia