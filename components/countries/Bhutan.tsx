import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Bhutan:React.FC = () => {

  const { bhutanColor } = useContext(ColorContext)
  const { bhutanDiff } = useContext(DiffContext)

return (
<g className={'bhutan'}>
  <style jsx>{`
  .bhutan {
  fill: ${bhutanColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bt" x="0" y="0" width="1" height="1" viewBox="5 0 8 8">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bhutanColor)}/>
  </pattern>
</defs>
{(bhutanDiff == 1) ?
<path fill="url(#bt)" d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z" stroke="black"/>
:
<path d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z" stroke="black"/>
}
</g>
)
}

export default Bhutan