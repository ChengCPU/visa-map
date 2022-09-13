import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Estonia = () => {

    const { estoniaColor } = useContext(ColorContext)

return (
<g className={'estonia'}>
    <style jsx>{`
    .estonia {
    fill: ${estoniaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z" stroke="black"/>
</g>
)
}

export default Estonia