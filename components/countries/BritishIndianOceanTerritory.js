import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const BritishIndianOceanTerritory = () => {

    const { britishIndianOceanTerritoryColor } = useContext(ColorContext)

return (
<g className={'britishIndianOceanTerritory'}>
    <style jsx>{`
    .britishIndianOceanTerritory {
    fill: ${britishIndianOceanTerritoryColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="710" cx="1200" stroke="black"/>
</g>
)
}

export default BritishIndianOceanTerritory