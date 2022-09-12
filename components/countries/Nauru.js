import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Nauru = () => {

    const { nauruColor } = useContext(ColorContext)

return (
<g className={'nauru'}>
    <style jsx>{`
    .nauru {
    fill: ${nauruColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="200" cx="1400" stroke="black"/>
</g>
)
}

export default memo(Nauru)