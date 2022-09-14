import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaoTomeAndPrincipe = () => {

    const { saoTomeAndPrincipeColor } = useContext(ColorContext)

return (
<g className={'saoTomeAndPrincipe'}>
    <style jsx>{`
    .saoTomeAndPrincipe {
    fill: ${saoTomeAndPrincipeColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="500" cx="1025" stroke="black"/>
</g>
)
}

export default SaoTomeAndPrincipe