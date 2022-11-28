import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Monaco = () => {

  const { monacoColor } = useContext(ColorContext)

return (
<g className={'monaco'}>
  <style jsx>{`
  .monaco {
  fill: ${monacoColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="224" cx="1021" stroke="black"/>
</g>
)
}

export default Monaco