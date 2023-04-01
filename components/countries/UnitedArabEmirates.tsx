import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const UnitedArabEmirates:React.FC = () => {

  const { unitedArabEmiratesColor } = useContext(ColorContext)
  const { unitedArabEmiratesDiff } = useContext(DiffContext)

return (
<g className={'unitedArabEmirates'}>
  <style jsx>{`
  .unitedArabEmirates {
  fill: ${unitedArabEmiratesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ae" x="0" y="0" width="1" height="1" viewBox="0 0 16 16">
    <image width="1500" height="1500" xlinkHref={gridCalculation(unitedArabEmiratesColor)}/>
  </pattern>
</defs>
{(unitedArabEmiratesDiff == 1) ?
<path fill="url(#ae)" d="M1296.2 336.7l1.3 5.1-2.8 0 0 4.2 1.1 0.9-2.4 1.3 0.2 2.6-1.3 2.6 0 2.6-1 1.4-16.9-3.2-2.7-6.6-0.3-1.4 0.9-0.4 0.4 1.8 4.2-1 4.6 0.2 3.4 0.2 3.3-4.4 3.7-4.1 3-4 1.3 2.2z" stroke="black"/>
:
<path d="M1296.2 336.7l1.3 5.1-2.8 0 0 4.2 1.1 0.9-2.4 1.3 0.2 2.6-1.3 2.6 0 2.6-1 1.4-16.9-3.2-2.7-6.6-0.3-1.4 0.9-0.4 0.4 1.8 4.2-1 4.6 0.2 3.4 0.2 3.3-4.4 3.7-4.1 3-4 1.3 2.2z" stroke="black"/>
}
</g>
)
}

export default UnitedArabEmirates