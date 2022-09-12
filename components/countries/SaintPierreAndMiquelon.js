import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintPierreAndMiquelon = () => {

    const { saintPierreAndMiquelonColor } = useContext(ColorContext)

return (
<g className={'saintPierreAndMiquelon'}>
    <style jsx>{`
    .saintPierreAndMiquelon {
    fill: ${saintPierreAndMiquelonColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="275" cx="1050" stroke="black"/>
</g>
)
}

export default memo(SaintPierreAndMiquelon)