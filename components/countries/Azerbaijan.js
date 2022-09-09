import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Azerbaijan = () => {

    const { azerbaijanColor } = useContext(ColorContext)

return (
<g className={'azerbaijan'}>
    <style jsx>{`
    .azerbaijan {
    fill: ${azerbaijanColor};
    }
    `}</style>
<path d="M 1229 253.2 1225.2 252.3 1222 249.4 1220.8 246.9 1221.8 246.8 1223.7 248.5 1226 248.5 1226.2 249.5 1229 253.2 Z" />
<path d="M 1235.3 236.2 1237.8 233.6 1241.3 236.9 1244.9 241.5 1247.4 241.8 1249.3 243.5 1245.1 244 1245.2 249 1244.8 251.2 1243.1 252.7 1243.9 255.8 1242.6 256.2 1238.7 252.8 1239.9 249.7 1238 247.8 1236.1 248.3 1230.8 253 1229.9 248.5 1227.4 247.5 1224.8 245.8 1225.9 243.7 1222.7 241.5 1223.4 239.9 1221.2 238.8 1219.8 237.2 1220.9 236.1 1225.1 238 1228 238.3 1228.6 237.6 1225.3 234.1 1226.5 233.3 1228 233.5 1232.3 237.3 1234.7 237.8 1235.3 236.2 Z" />
</g>
)
}
    
export default memo(Azerbaijan)