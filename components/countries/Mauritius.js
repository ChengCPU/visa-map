import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Mauritius = () => {

    const { mauritiusColor } = useContext(ColorContext)

return (
<g className={'mauritius'}>
    <style jsx>{`
    .mauritius {
    fill: ${mauritiusColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="630" cx="1307" stroke="black"/>
</g>
)
}

export default Mauritius