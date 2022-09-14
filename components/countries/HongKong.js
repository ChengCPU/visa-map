import { useContext } from 'react'
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
<circle r="4" cy="358" cx="1622" stroke="black"/>
</g>
)
}

export default HongKong