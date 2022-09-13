import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Bulgaria = () => {

    const { bulgariaColor } = useContext(ColorContext)

return (
<g className={'bulgaria'}>
    <style jsx>{`
    .bulgaria {
    fill: ${bulgariaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-0.8-5 2 0.3 3.2-4.6 0.6-3.9-2.3-4 1.8-3.8-0.2-0.8-4.2-2.8-2.1 0.7-0.8-0.6-0.8 0.6-2 1.8-2-2.8-2.7-0.7-2.4 1.1-1.4 1.8 2.6 1.9-0.4 4 0.9 7.6 0.4 2.3-1.6 5.9-1.5 4 2.3 3.1 0.7z" stroke="black"/>
</g>
)
}

export default Bulgaria