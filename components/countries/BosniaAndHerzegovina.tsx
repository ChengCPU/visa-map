import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const BosniaAndHerzegovina:React.FC = () => {

  const { bosniaAndHerzegovinaColor } = useContext(ColorContext)
  const { bosniaAndHerzegovinaDiff } = useContext(DiffContext)

return (
<g className={'bosniaAndHerzegovina'}>
  <style jsx>{`
  .bosniaAndHerzegovina {
  fill: ${bosniaAndHerzegovinaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ba" x="0" y="0" width="1" height="1" viewBox="0 0 13 13">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bosniaAndHerzegovinaColor)}/>
  </pattern>
</defs>
{(bosniaAndHerzegovinaDiff == 1) ?
<path fill="url(#ba)" d="M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z" stroke="black"/>
:
<path d="M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z" stroke="black"/>
}
</g>
)
}

export default BosniaAndHerzegovina