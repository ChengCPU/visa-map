import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const WesternSahara = () => {

  const { westernSaharaColor } = useContext(ColorContext)

return (
<g className={'westernSahara'}>
  <style jsx>{`
  .westernSahara {
  fill: ${westernSaharaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M938.9 324.3l-0.1 0.4-0.1 1.2-0.2 9.8-18-0.4-0.2 16.5-5.2 0.5-1.5 3.3 0.9 9.3-21.7 0-1.3 2.1 0.3-2.7 0.1 0 12.5-0.5 0.7-2.3 2.4-2.9 2-8.9 7.9-6.9 2.7-8.1 1.8-0.5 1.9-5 4.6-0.7 2 0.9 2.5 0 1.8-1.5 3.4-0.2-0.1-3.4 0.9 0z" stroke="black"/>
</g>
)
}

export default WesternSahara