import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Burundi:React.FC = () => {

  const { burundiColor } = useContext(ColorContext)
  const { BI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'burundi'} onMouseOver={() => setCountrySelect('burundi')}>
  <style jsx>{`
  .burundi {
  fill: ${burundiColor};
  }
  `}</style>
<defs>
  <pattern id="bi" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(burundiColor)}/>
  </pattern>
</defs>
{(BI == 1) ?
<>
<path fill="url(#bi)" d="M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1-0.01-0.06-0.09-1.04-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z" />
<circle fill="url(#bi)" r="5" cy="525" cx="1156" stroke="black"/>
</>
:
<>
<path d="M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1-0.01-0.06-0.09-1.04-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z" />
<circle r="5" cy="525" cx="1156" stroke="black"/>
</>
}
</g>
)
}

export default Burundi