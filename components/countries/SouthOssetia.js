import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SouthOssetia = () => {

    const { southOssetiaColor } = useContext(ColorContext)

return (
<g className={'southOssetia'}>
    <style jsx>{`
    .southOssetia {
    fill: ${southOssetiaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="600" cx="750" stroke="black"/>
</g>
)
}

export default SouthOssetia