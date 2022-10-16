import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Mayotte = () => {

    const { mayotteColor } = useContext(ColorContext)

return (
<g className={'mayotte'}>
    <style jsx>{`
    .mayotte {
    fill: ${mayotteColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="585" cx="1242" stroke="black"/>
</g>
)
}

export default Mayotte