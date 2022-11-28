import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SouthKorea = () => {

  const { southKoreaColor } = useContext(ColorContext)

return (
<g className={'southKorea'}>
  <style jsx>{`
  .southKorea {
  fill: ${southKoreaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1652.9 259.5l0-0.6 2.5 0.2 0.6-2.8 3.6-0.4 2-0.4 0-1.5 8.3 7.5 3.3 4.2 3.4 7.4-0.5 3.5-4.3 1.2-3.1 2.7-4.6 0.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1-6.1-5.5z" stroke="black"/>
</g>
)
}

export default SouthKorea