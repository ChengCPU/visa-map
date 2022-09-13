import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Abkhazia = () => {

    const { abkhaziaColor } = useContext(ColorContext)

return (
<g className={'abkhazia'}>
    <style jsx>{`
    .abkhazia {
    fill: ${abkhaziaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="389" cx="1190" stroke="black"/>
</g>
)
}

export default Abkhazia