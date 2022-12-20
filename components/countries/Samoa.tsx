import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Samoa:React.FC = () => {

  const { samoaColor } = useContext(ColorContext)

return (
<g className={'samoa'}>
  <style jsx>{`
  .samoa {
  fill: ${samoaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="590" cx="20" stroke="black"/>
</g>
)
}

export default Samoa