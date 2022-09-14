import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CapeVerde = () => {

    const { capeVerdeColor } = useContext(ColorContext)

return (
<g className={'capeVerde'}>
    <style jsx>{`
    .capeVerde {
    fill: ${capeVerdeColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="400" cx="853" stroke="black"/>
</g>
)
}

export default CapeVerde