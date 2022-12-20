import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const AntiguaAndBarbuda:React.FC = () => {

  const { antiguaAndBarbudaColor } = useContext(ColorContext)

return (
<g className={'antiguaAndBarbuda'}>
  <style jsx>{`
  .antiguaAndBarbuda {
  fill: ${antiguaAndBarbudaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.25" cy="397" cx="642" stroke="black"/>
</g>
)
}

export default AntiguaAndBarbuda