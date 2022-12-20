import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Netherlands:React.FC = () => {

  const { netherlandsColor } = useContext(ColorContext)

return (
<g className={'netherlands'}>
  <style jsx>{`
  .netherlands {
  fill: ${netherlandsColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z" stroke="black"/>
</g>
)
}

export default Netherlands