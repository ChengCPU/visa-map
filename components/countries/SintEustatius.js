import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SintEustatius = () => {

  const { sintEustatiusColor } = useContext(ColorContext)

return (
<g className={'sintEustatius'}>
  <style jsx>{`
  .sintEustatius {
  fill: ${sintEustatiusColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="2.5" cy="393.5" cx="629" stroke="black"/>
</g>
)
}

export default SintEustatius