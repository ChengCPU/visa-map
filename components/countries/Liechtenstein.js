import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Liechtenstein = () => {

    const { liechtensteinColor } = useContext(ColorContext)

return (
<g className={'liechtenstein'}>
    <style jsx>{`
    .liechtenstein {
    fill: ${liechtensteinColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="210" cx="300" stroke="black"/>
</g>
)
}

export default Liechtenstein