import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Uruguay:React.FC = () => {

  const { uruguayColor } = useContext(ColorContext)
  const { uruguayDiff } = useContext(DiffContext)

return (
<g className={'uruguay'}>
  <style jsx>{`
  .uruguay {
  fill: ${uruguayColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="uy" x="0" y="0" width="1" height="1" viewBox="0 10 16 16">
    <image width="1500" height="1500" xlinkHref={gridCalculation(uruguayColor)}/>
  </pattern>
</defs>
{(uruguayDiff == 1) ?
<path fill="url(#uy)" d="M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z" stroke="black"/>
:
<path d="M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z" stroke="black"/>
}
</g>
)
}

export default Uruguay