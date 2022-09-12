import { memo, useContext } from 'react'
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
<path d="M634.2 386l0 0.1-0.4-0.1 0-0.1 0.4 0.1z" stroke="black"/>
<circle r="5" cy="450" cx="1300" stroke="black"/>
</g>
)
}

export default memo(SintMaarten)