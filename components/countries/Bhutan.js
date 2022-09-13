import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Bhutan = () => {

    const { bhutanColor } = useContext(ColorContext)

return (
<g className={'bhutan'}>
    <style jsx>{`
    .bhutan {
    fill: ${bhutanColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z" stroke="black"/>
</g>
)
}

export default Bhutan