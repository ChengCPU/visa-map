import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Greece:React.FC = () => {

  const { greeceColor } = useContext(ColorContext)
  const { greeceDiff } = useContext(DiffContext)

return (
<>
<g className={'greece'}>
  <style jsx>{`
  .greece {
  fill: ${greeceColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gr" x="0" y="0" width="1" height="1" viewBox="0 0 23 23">
    <image width="1500" height="1500" xlinkHref={gridCalculation(greeceColor)}/>
  </pattern>
  <pattern id="gr2" x="0" y="0" width="1" height="1" viewBox="10 0 4 4">
    <image width="1500" height="1500" xlinkHref={gridCalculation(greeceColor)}/>
  </pattern>
</defs>
{(greeceDiff == 1) ?
<path fill="url(#gr)" d="M 1121.9 239.9 1118.7 239.7 1116 239.1 1109.8 240.7 1113.8 244.3 1111.3 245.4 1108.4 245.4 1105.3 242.1 1104.4 243.5 1106 247.3 1108.9 250.3 1107 251.7 1110.2 254.6 1113 256.5 1113.4 260.1 1108.4 258.4 1110.2 261.7 1106.9 262.3 1109.4 268 1105.9 268.1 1101.3 265.3 1098.9 260.2 1097.6 255.9 1095.3 253 1092.3 249.3 1091.8 247.5 1094 244.4 1094.1 242.3 1095.8 241.4 1095.7 239.7 1099.1 239.2 1100.9 237.8 1103.7 237.9 1104.5 236.8 1105.5 236.6 1109.3 236.8 1113.3 235 1117.2 237.3 1121.8 236.7 1121.5 233.5 1124.2 235.2 1123.1 239.2 1121.9 239.9 Z" stroke="black"/>
:
<path d="M 1121.9 239.9 1118.7 239.7 1116 239.1 1109.8 240.7 1113.8 244.3 1111.3 245.4 1108.4 245.4 1105.3 242.1 1104.4 243.5 1106 247.3 1108.9 250.3 1107 251.7 1110.2 254.6 1113 256.5 1113.4 260.1 1108.4 258.4 1110.2 261.7 1106.9 262.3 1109.4 268 1105.9 268.1 1101.3 265.3 1098.9 260.2 1097.6 255.9 1095.3 253 1092.3 249.3 1091.8 247.5 1094 244.4 1094.1 242.3 1095.8 241.4 1095.7 239.7 1099.1 239.2 1100.9 237.8 1103.7 237.9 1104.5 236.8 1105.5 236.6 1109.3 236.8 1113.3 235 1117.2 237.3 1121.8 236.7 1121.5 233.5 1124.2 235.2 1123.1 239.2 1121.9 239.9 Z" stroke="black"/>
}
</g>
<g className={'greece'}>
  <style jsx>{`
  .greece {
  fill: ${greeceColor};
  stroke-width: 0.75;
  }
  `}</style>
{(greeceDiff == 1) ?
<path fill="url(#gr2)" d="M 1112.7 272.6 1115.8 274.8 1119.9 274.4 1123.9 274.8 1123.9 276 1126.7 275.2 1126.2 277.1 1118.6 277.6 1118.5 276.6 1111.9 275.3 1112.7 272.6 Z" stroke="black"/>
:
<path d="M 1112.7 272.6 1115.8 274.8 1119.9 274.4 1123.9 274.8 1123.9 276 1126.7 275.2 1126.2 277.1 1118.6 277.6 1118.5 276.6 1111.9 275.3 1112.7 272.6 Z" stroke="black"/>
}
</g>
</>
)
}

export default Greece