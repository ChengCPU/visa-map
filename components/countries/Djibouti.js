import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Djibouti = () => {

  const { djiboutiColor } = useContext(ColorContext)

return (
<g className={'djibouti'}>
  <style jsx>{`
  .djibouti {
  fill: ${djiboutiColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z" />
<circle r="5" cy="426" cx="1226" stroke="black"/>
</g>
)
}

export default Djibouti