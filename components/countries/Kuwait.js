import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Kuwait = () => {

    const { kuwaitColor } = useContext(ColorContext)

return (
<g className={'kuwait'}>
    <style jsx>{`
    .kuwait {
    fill: ${kuwaitColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z" />
<circle r="5" cy="313" cx="1247" stroke="black"/>
</g>
)
}

export default Kuwait