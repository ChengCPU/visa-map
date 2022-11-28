import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintLucia = () => {

  const { saintLuciaColor } = useContext(ColorContext)

return (
<g className={'saintLucia'}>
  <style jsx>{`
  .saintLucia {
  fill: ${saintLuciaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.25" cy="419" cx="645" stroke="black"/>
</g>
)
}

export default SaintLucia