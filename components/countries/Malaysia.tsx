import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Malaysia:React.FC = () => {

  const { malaysiaColor } = useContext(ColorContext)
  const { MY } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'malaysia'} onMouseOver={() => setCountrySelect('malaysia')}>
  <style jsx>{`
  .malaysia {
  fill: ${malaysiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="my" x="0" y="0" width="1" height="1" viewBox="0 10 18 18">
    <image width="1500" height="1500" xlinkHref={gridCalculation(malaysiaColor)}/>
  </pattern>
  <pattern id="my2" x="0" y="0" width="1" height="1" viewBox="20 0 28 28">
    <image width="1500" height="1500" xlinkHref={gridCalculation(malaysiaColor)}/>
  </pattern>
</defs>
{(MY == 1) ?
<>
<path fill="url(#my)" d="M 1564.3 461.9 1565.7 462.5 1569.2 466.4 1571.7 470.7 1572.3 475 1571.8 477.9 1572.4 480.1 1572.9 483.9 1575 485.7 1577.3 491.4 1577.3 493.5 1573.3 494 1567.8 489.2 1561 484.1 1560.2 480.8 1556.8 476.5 1555.8 471.2 1553.6 467.7 1554 463 1552.6 460.3 1553.5 459.2 1558.3 462 1558.9 465.3 1562.6 464.5 1564.3 461.9 Z" stroke="black"/>
<path fill="url(#my2)" d="M 1654.1 475.3 1649.1 474.2 1642.6 474.2 1640.9 481.5 1638.8 483.7 1636.2 492.6 1631.6 494 1626.2 492.2 1623.5 492.8 1620.2 496 1616.6 495.6 1612.9 496.9 1609 493.2 1608 488.9 1612.2 491.1 1616.5 489.9 1617.5 484.5 1619.9 483.3 1626.7 481.9 1630.5 476.8 1633.1 472.8 1635.9 476.1 1637 473.9 1639.7 474.1 1639.8 470 1639.9 466.8 1644 462.4 1646.6 457.4 1648.9 457.3 1652 460.6 1652.4 463.4 1656.2 465.2 1661 467.1 1660.8 469.6 1657 469.9 1658.1 473.1 1654.1 475.3 Z" stroke="black"/>
</>
:
<>
<path d="M 1564.3 461.9 1565.7 462.5 1569.2 466.4 1571.7 470.7 1572.3 475 1571.8 477.9 1572.4 480.1 1572.9 483.9 1575 485.7 1577.3 491.4 1577.3 493.5 1573.3 494 1567.8 489.2 1561 484.1 1560.2 480.8 1556.8 476.5 1555.8 471.2 1553.6 467.7 1554 463 1552.6 460.3 1553.5 459.2 1558.3 462 1558.9 465.3 1562.6 464.5 1564.3 461.9 Z" stroke="black"/>
<path d="M 1654.1 475.3 1649.1 474.2 1642.6 474.2 1640.9 481.5 1638.8 483.7 1636.2 492.6 1631.6 494 1626.2 492.2 1623.5 492.8 1620.2 496 1616.6 495.6 1612.9 496.9 1609 493.2 1608 488.9 1612.2 491.1 1616.5 489.9 1617.5 484.5 1619.9 483.3 1626.7 481.9 1630.5 476.8 1633.1 472.8 1635.9 476.1 1637 473.9 1639.7 474.1 1639.8 470 1639.9 466.8 1644 462.4 1646.6 457.4 1648.9 457.3 1652 460.6 1652.4 463.4 1656.2 465.2 1661 467.1 1660.8 469.6 1657 469.9 1658.1 473.1 1654.1 475.3 Z" stroke="black"/>
</>
}
</g>
)
}

export default Malaysia