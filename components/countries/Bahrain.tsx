import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Bahrain:React.FC = () => {

  const { bahrainColor } = useContext(ColorContext)

return (
<g className={'bahrain'}>
  <style jsx>{`
  .bahrain {
  fill: ${bahrainColor};
  }
  `}</style>
<path d="M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z" />
<circle r="4" cy="333" cx="1264" stroke="black"/>
</g>
)
}

export default Bahrain