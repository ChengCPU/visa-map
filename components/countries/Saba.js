import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Saba = () => {

    const { sabaColor } = useContext(ColorContext)

return (
<g className={'saba'}>
    <style jsx>{`
    .saba {
    fill: ${sabaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="388" cx="632" stroke="black"/>
</g>
)
}

export default Saba