import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Liberia:React.FC = () => {

  const { liberiaColor } = useContext(ColorContext)
  const { liberiaDiff } = useContext(DiffContext)

return (
<g className={'liberia'}>
  <style jsx>{`
  .liberia {
  fill: ${liberiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lr" x="0" y="0" width="1" height="1" viewBox="20 20 15 15">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(liberiaDiff == 1) ?
<path fill="url(#lr)" d="M938.6 452.5l-0.2 1.8 0.5 3.1-1.2 2.9 1.6 1.8 1.8 0.4 2.4 2.7 0.2 2.5-0.6 0.8-0.4 5.3-1.5 0.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1 0.3-1.9 2.6-3.4 2.6-3 1.3-0.2 1.4-0.7 2.4 3.9-0.4 2.6 1.1 1.4 1.6 0 1.1-2.6 1.6 0.2z" stroke="black"/>
:
<path d="M938.6 452.5l-0.2 1.8 0.5 3.1-1.2 2.9 1.6 1.8 1.8 0.4 2.4 2.7 0.2 2.5-0.6 0.8-0.4 5.3-1.5 0.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1 0.3-1.9 2.6-3.4 2.6-3 1.3-0.2 1.4-0.7 2.4 3.9-0.4 2.6 1.1 1.4 1.6 0 1.1-2.6 1.6 0.2z" stroke="black"/>
}
</g>
)
}

export default Liberia