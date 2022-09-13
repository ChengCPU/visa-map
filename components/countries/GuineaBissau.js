import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const GuineaBissau = () => {

    const { guineaBissauColor } = useContext(ColorContext)

return (
<g className={'guineaBissau'}>
    <style jsx>{`
    .guineaBissau {
    fill: ${guineaBissauColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z" stroke="black"/>
</g>
)
}

export default GuineaBissau