import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const HongKong = () => {

    const { hongKongColor } = useContext(ColorContext)

return (
<g className={'hongKong'}>
    <style jsx>{`
    .hongKong {
    fill: ${hongKongColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="1150" stroke="black"/>
</g>
)
}

export default memo(HongKong)