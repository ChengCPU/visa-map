import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintMartin = () => {

  const { saintMartinColor } = useContext(ColorContext)

return (
<g className={'saintMartin'}>
  <style jsx>{`
  .saintMartin {
  fill: ${saintMartinColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="379" cx="630" stroke="black"/>
</g>
)
}

export default SaintMartin