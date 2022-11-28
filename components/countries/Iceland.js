import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Iceland = () => {

  const { icelandColor } = useContext(ColorContext)

return (
<g className={'iceland'}>
  <style jsx>{`
  .iceland {
  fill: ${icelandColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z" stroke="black"/>
</g>
)
}

export default Iceland