import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guyana = () => {

    const { guyanaColor } = useContext(ColorContext)

return (
<g className={'guyana'}>
    <style jsx>{`
    .guyana {
    fill: ${guyanaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M662.9 463.5l-1 5.8-3.5 1.6 0.3 1.5-1.1 3.4 2.4 4.6 1.8 0 0.7 3.6 3.3 5.6-1.3 0.3-3.2-0.6-1.8 1.7-2.6 1.1-1.8 0.3-0.6 1.3-2.8-0.3-3.5-3-0.3-3-1.4-3.3 1-5.4 1.6-2.3-1.2-3-2-0.9 0.8-2.9-1.2-1.4-3 0.2-3.7-4.8 1.6-1.8 0-3 3.5-1 1.4-1.2-1.8-2.4 0.5-2.3 4.7-3.8 3.6 2.4 3.3 4.1 0.1 3.4 2.1 0.1 3 3.1 2.1 2.3z" stroke="black"/>
</g>
)
}

export default Guyana