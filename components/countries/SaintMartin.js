import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintMartin = () => {

    const { saintMartinColor } = useContext(ColorContext)

return (
<g className={'saintMartin'}>
    <style jsx>{`
    .saintMartin {
    fill: ${saintMartinColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M634.2 386l-0.4-0.1 0.2-0.3 0.3-0.1-0.1 0.5z" />
<circle r="4" cy="350" cx="634" stroke="black"/>
</g>
)
}

export default SaintMartin