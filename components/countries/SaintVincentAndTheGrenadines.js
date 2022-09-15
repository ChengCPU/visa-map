import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintVincentAndTheGrenadines = () => {

    const { saintVincentAndTheGrenadinesColor } = useContext(ColorContext)

return (
<g className={'saintVincentAndTheGrenadines'}>
    <style jsx>{`
    .saintVincentAndTheGrenadines {
    fill: ${saintVincentAndTheGrenadinesColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="3.25" cy="426" cx="645" stroke="black"/>
</g>
)
}

export default SaintVincentAndTheGrenadines