import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Gabon = () => {

    const { gabonColor } = useContext(ColorContext)

return (
<g className={'gabon'}>
    <style jsx>{`
    .gabon {
    fill: ${gabonColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z" stroke="black"/>
</g>
)
}

export default Gabon