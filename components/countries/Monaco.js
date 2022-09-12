import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Monaco = () => {

    const { monacoColor } = useContext(ColorContext)

return (
<g className={'monaco'}>
    <style jsx>{`
    .monaco {
    fill: ${monacoColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="200" cx="1200" stroke="black"/>
</g>
)
}

export default memo(Monaco)