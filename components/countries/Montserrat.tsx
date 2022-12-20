import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Montserrat:React.FC = () => {

  const { montserratColor } = useContext(ColorContext)

return (
<g className={'montserrat'}>
  <style jsx>{`
  .montserrat {
  fill: ${montserratColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="401" cx="637" stroke="black"/>
</g>
)
}

export default Montserrat