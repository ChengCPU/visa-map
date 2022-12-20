import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Paraguay:React.FC = () => {

  const { paraguayColor } = useContext(ColorContext)

return (
<g className={'paraguay'}>
  <style jsx>{`
  .paraguay {
  fill: ${paraguayColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M662.5 631.4l2 3.5 0.4 8.7 5.9 1.3 2.2-1.3 3.9 1.8 1.2 1.9 1.1 5.9 0.8 2.4 2.1 0.3 2-1 2.1 1.1 0.3 3.6-0.3 3.8-0.7 3.7-0.3 5.6-4.3 5-4.2 1-6.3-1-5.8-1.7 4.2-9.8-1.1-2.8-5.9-2.5-7.3-4.8-4.6-1-11.3-10.4 1.5-7.7-0.2-3.5 2.1-5.6 9.6-1.9 5.2 0.1 5.4 3.3 0.3 2z" stroke="black"/>
</g>
)
}

export default Paraguay