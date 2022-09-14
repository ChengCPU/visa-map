import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const NorfolkIsland = () => {

    const { norfolkIslandColor } = useContext(ColorContext)

return (
<g className={'norfolkIsland'}>
    <style jsx>{`
    .norfolkIsland {
    fill: ${norfolkIslandColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="690" cx="1900" stroke="black"/>
</g>
)
}

export default NorfolkIsland