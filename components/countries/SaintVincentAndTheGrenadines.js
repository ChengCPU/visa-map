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
<path d="M642.2 417.4l-0.1 0.1-0.5-0.3 0-0.4 0.2-0.3 0.2-0.5 0.4 0 0.1 0.4-0.1 0.8-0.2 0.2z" />
<circle r="5" cy="700" cx="1000" stroke="black"/>
</g>
)
}

export default SaintVincentAndTheGrenadines