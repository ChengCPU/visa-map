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
<circle r="2.5" cy="384" cx="630" stroke="black"/>
</g>
)
}

export default SintMaarten