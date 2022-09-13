import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Suriname = () => {

    const { surinameColor } = useContext(ColorContext)

return (
<g className={'suriname'}>
    <style jsx>{`
    .suriname {
    fill: ${surinameColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z" stroke="black"/>
</g>
)
}

export default Suriname