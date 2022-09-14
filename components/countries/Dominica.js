import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Dominica = () => {

    const { dominicaColor } = useContext(ColorContext)

return (
<g className={'dominica'}>
    <style jsx>{`
    .dominica {
    fill: ${dominicaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="3.5" cy="398" cx="644" stroke="black"/>
</g>
)
}

export default Dominica