import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Japan:React.FC = () => {

  const { japanColor } = useContext(ColorContext)
  const { japanDiff } = useContext(DiffContext)

return (
<g className={'japan'}>
  <style jsx>{`
  .japan {
  fill: ${japanColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="jp" x="0" y="0" width="1" height="1" viewBox="0 20 39 39">
    <image width="1500" height="1500" xlinkHref={gridCalculation(japanColor)}/>
  </pattern>
  <pattern id="jp2" x="0" y="0" width="1" height="1" viewBox="0 10 19 19">
    <image width="1500" height="1500" xlinkHref={gridCalculation(japanColor)}/>
  </pattern>
  <pattern id="jp3" x="0" y="0" width="1" height="1" viewBox="0 10 8 8">
    <image width="1500" height="1500" xlinkHref={gridCalculation(japanColor)}/>
  </pattern>
</defs>
{(japanDiff == 1) ?
<>
<path fill="url(#jp3)" d="M 1708.5 282.6 1710.1 284.8 1708.8 288.7 1705.7 286.6 1703.6 288.1 1703.7 291.8 1699.4 290 1698.2 287 1699.5 283.1 1702.9 283.9 1703.9 281.2 1708.5 282.6 Z" stroke="black"/>
<path fill="url(#jp)" d="M 1733.1 263.4 1733.7 268.5 1736.2 271.7 1735.6 276.2 1730.2 279.2 1721 279.6 1716.6 287 1711.9 284.5 1709.5 279.7 1700.9 281.1 1695.8 284.1 1689.6 284.3 1697 289 1697.8 299.9 1695.3 302.6 1691.7 300.1 1690.8 294.3 1686.7 292.5 1682.7 288.1 1687 286.1 1688.1 282 1692 278.7 1694 274.3 1703.7 272.4 1710 273.7 1710 262.3 1715.1 265.4 1719.6 259 1721.3 256.5 1720.3 248.7 1715.2 241.5 1715 237.5 1719.8 236.3 1728 245.2 1730.8 250.3 1729.5 256.8 1733.1 263.4 Z" stroke="black"/>
<path fill="url(#jp2)" d="M 1721.2 218.6 1725.7 219.9 1727.5 217.3 1733.5 224.4 1727.1 226.1 1726.7 232.4 1715.8 228.1 1717.4 235 1711.7 235.1 1707 228.8 1706.4 223.9 1711.6 223.6 1707.2 214.8 1705.4 209.9 1715.9 216.5 1721.2 218.6 Z" stroke="black"/>
</>
:
<>
<path d="M 1708.5 282.6 1710.1 284.8 1708.8 288.7 1705.7 286.6 1703.6 288.1 1703.7 291.8 1699.4 290 1698.2 287 1699.5 283.1 1702.9 283.9 1703.9 281.2 1708.5 282.6 Z" stroke="black"/>
<path d="M 1733.1 263.4 1733.7 268.5 1736.2 271.7 1735.6 276.2 1730.2 279.2 1721 279.6 1716.6 287 1711.9 284.5 1709.5 279.7 1700.9 281.1 1695.8 284.1 1689.6 284.3 1697 289 1697.8 299.9 1695.3 302.6 1691.7 300.1 1690.8 294.3 1686.7 292.5 1682.7 288.1 1687 286.1 1688.1 282 1692 278.7 1694 274.3 1703.7 272.4 1710 273.7 1710 262.3 1715.1 265.4 1719.6 259 1721.3 256.5 1720.3 248.7 1715.2 241.5 1715 237.5 1719.8 236.3 1728 245.2 1730.8 250.3 1729.5 256.8 1733.1 263.4 Z" stroke="black"/>
<path d="M 1721.2 218.6 1725.7 219.9 1727.5 217.3 1733.5 224.4 1727.1 226.1 1726.7 232.4 1715.8 228.1 1717.4 235 1711.7 235.1 1707 228.8 1706.4 223.9 1711.6 223.6 1707.2 214.8 1705.4 209.9 1715.9 216.5 1721.2 218.6 Z" stroke="black"/>
</>
}
</g>
)
}

export default Japan