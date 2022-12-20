import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SouthOssetia:React.FC = () => {

  const { southOssetiaColor } = useContext(ColorContext)

return (
<g className={'southOssetia'}>
  <style jsx>{`
  .southOssetia {
  fill: ${southOssetiaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.5" cy="229" cx="1212" stroke="black"/>
</g>
)
}

export default SouthOssetia