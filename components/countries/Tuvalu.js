import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Tuvalu = () => {

    const { tuvaluColor } = useContext(ColorContext)

return (
<g className={'tuvalu'}>
    <style jsx>{`
    .tuvalu {
    fill: ${tuvaluColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1998.9 556.6l0-0.2 0.1 0 0 0.1-0.1 0.1z" />
<circle r="5" cy="700" cx="993" stroke="black"/>
</g>
)
}

export default Tuvalu