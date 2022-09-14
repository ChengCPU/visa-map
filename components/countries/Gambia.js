import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Gambia = () => {

    const { gambiaColor } = useContext(ColorContext)

return (
<g className={'gambia'}>
    <style jsx>{`
    .gambia {
    fill: ${gambiaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z" />
<circle r="5" cy="415" cx="900" stroke="black"/>
</g>
)
}

export default Gambia