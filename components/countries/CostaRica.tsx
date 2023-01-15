import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const CostaRica:React.FC = () => {

  const { costaRicaColor } = useContext(ColorContext)
  const { costaRicaDiff } = useContext(DiffContext)

return (
<g className={'costaRica'}>
  <style jsx>{`
  .costaRica {
  fill: ${costaRicaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cr" x="0" y="0" width="1" height="1" viewBox="0 0 12 12">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(costaRicaDiff == 1) ?
<path fill="url(#cr)" d="M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z" stroke="black"/>
:
<path d="M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z" stroke="black"/>
}
</g>
)
}

export default CostaRica