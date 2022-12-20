import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SouthGeorgiaAndTheSouthSandwichIslands:React.FC = () => {

  const { southGeorgiaAndTheSouthSandwichIslandsColor } = useContext(ColorContext)

return (
<g className={'southGeorgiaAndTheSouthSandwichIslands'}>
  <style jsx>{`
  .southGeorgiaAndTheSouthSandwichIslands {
  fill: ${southGeorgiaAndTheSouthSandwichIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="852" cx="770" stroke="black"/>
</g>
)
}

export default SouthGeorgiaAndTheSouthSandwichIslands