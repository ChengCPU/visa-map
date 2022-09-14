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
<circle r="5" cy="556" cx="1998" stroke="black"/>
</g>
)
}

export default Tuvalu