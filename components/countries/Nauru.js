import { useContext } from 'react'
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
<circle r="5" cy="505" cx="1933" stroke="black"/>
</g>
)
}

export default Nauru