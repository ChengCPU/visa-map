import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Djibouti:React.FC = () => {

  const { djiboutiColor } = useContext(ColorContext)
  const { djiboutiDiff } = useContext(DiffContext)

return (
<g className={'djibouti'}>
  <style jsx>{`
  .djibouti {
  fill: ${djiboutiColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="dj" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(djiboutiColor)}/>
  </pattern>
</defs>
{(djiboutiDiff == 1) ?
<>
<path fill="url(#dj)" d="M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z" />
<circle fill="url(#dj)" r="5" cy="426" cx="1226" stroke="black"/>
</>
:
<>
<path d="M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z" />
<circle r="5" cy="426" cx="1226" stroke="black"/>
</>
}
</g>
)
}

export default Djibouti