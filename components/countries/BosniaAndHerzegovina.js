import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const BosniaAndHerzegovina = () => {

  const { bosniaAndHerzegovinaColor } = useContext(ColorContext)

return (
<g className={'bosniaAndHerzegovina'}>
  <style jsx>{`
  .bosniaAndHerzegovina {
  fill: ${bosniaAndHerzegovinaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z" stroke="black"/>
</g>
)
}

export default BosniaAndHerzegovina