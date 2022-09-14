import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Palestine = () => {

    const { palestineColor } = useContext(ColorContext)

return (
<g className={'palestine'}>
    <style jsx>{`
    .palestine {
    fill: ${palestineColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z" />
<circle r="3" cy="297" cx="1178" stroke="black"/>
</g>
)
}

export default Palestine