import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintBarthelemy = () => {

    const { saintBarthelemyColor } = useContext(ColorContext)

return (
<g className={'saintBarthelemy'}>
    <style jsx>{`
    .saintBarthelemy {
    fill: ${saintBarthelemyColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="387" cx="635" stroke="black"/>
</g>
)
}

export default SaintBarthelemy