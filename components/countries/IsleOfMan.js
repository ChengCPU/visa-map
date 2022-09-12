import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const IsleOfMan = () => {

    const { isleOfManColor } = useContext(ColorContext)

return (
<g className={'isleOfMan'}>
    <style jsx>{`
    .isleOfMan {
    fill: ${isleOfManColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="1200" stroke="black"/>
</g>
)
}

export default memo(IsleOfMan)