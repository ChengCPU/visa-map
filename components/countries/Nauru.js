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
<path d="M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z" />
<circle r="5" cy="200" cx="1400" stroke="black"/>
</g>
)
}

export default Nauru