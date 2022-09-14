import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Maldives = () => {

    const { maldivesColor } = useContext(ColorContext)

return (
<g className={'maldives'}>
    <style jsx>{`
    .maldives {
    fill: ${maldivesColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="474" cx="1402" stroke="black"/>
</g>
)
}

export default Maldives