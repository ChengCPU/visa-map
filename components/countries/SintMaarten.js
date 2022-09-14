import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SintMaarten = () => {

    const { sintMaartenColor } = useContext(ColorContext)

return (
<g className={'sintMaarten'}>
    <style jsx>{`
    .sintMaarten {
    fill: ${sintMaartenColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="360" cx="634" stroke="black"/>
</g>
)
}

export default SintMaarten