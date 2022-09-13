import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Taiwan = () => {

    const { taiwanColor } = useContext(ColorContext)

return (
<g className={'taiwan'}>
    <style jsx>{`
    .taiwan {
    fill: ${taiwanColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z" stroke="black"/>
</g>
)
}

export default Taiwan