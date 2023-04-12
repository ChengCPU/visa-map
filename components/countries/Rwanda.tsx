import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Rwanda:React.FC = () => {

  const { rwandaColor } = useContext(ColorContext)
  const { rwandaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'rwanda'} onMouseOver={() => setCountrySelect('rwanda')}>
  <style jsx>{`
  .rwanda {
  fill: ${rwandaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="rw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(rwandaColor)}/>
  </pattern>
</defs>
{(rwandaDiff == 1) ?
<>
<path fill="url(#rw)" d="M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z" />
<circle fill="url(#rw)" r="5" cy="515" cx="1155" stroke="black"/>
</>
:
<>
<path d="M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z" />
<circle r="5" cy="515" cx="1155" stroke="black"/>
</>
}
</g>
)
}

export default Rwanda