import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Niger:React.FC = () => {

  const { nigerColor } = useContext(ColorContext)
  const { nigerDiff } = useContext(DiffContext)

return (
<g className={'niger'}>
  <style jsx>{`
  .niger {
  fill: ${nigerColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ne" x="0" y="0" width="1" height="1" viewBox="10 0 50 50">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(nigerDiff == 1) ?
<path fill="url(#ne)" d="M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z" stroke="black"/>
:
<path d="M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z" stroke="black"/>
}
</g>
)
}

export default Niger