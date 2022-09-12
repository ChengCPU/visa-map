import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Luxembourg = () => {

    const { luxembourgColor } = useContext(ColorContext)

return (
<g className={'luxembourg'}>
    <style jsx>{`
    .luxembourg {
    fill: ${luxembourgColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1016.9 185.4l-1.4 0.1-1.1-0.5 0.4-3.5 1.3-0.2 1 1.4-0.2 2.7z" stroke="black"/>
</g>
)
}

export default memo(Luxembourg)