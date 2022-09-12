import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Singapore = () => {

    const { singaporeColor } = useContext(ColorContext)

return (
<g className={'singapore'}>
    <style jsx>{`
    .singapore {
    fill: ${singaporeColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="800" cx="1200" stroke="black"/>
</g>
)
}

export default memo(Singapore)