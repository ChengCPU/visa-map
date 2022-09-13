import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintLucia = () => {

    const { saintLuciaColor } = useContext(ColorContext)

return (
<g className={'saintLucia'}>
    <style jsx>{`
    .saintLucia {
    fill: ${saintLuciaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M643.7 413.8l-0.2-0.2-0.4-0.2-0.1-0.2 0-0.6 0.1-0.2 0.7-1.1 0.3 0.2 0 0.7-0.1 0.8-0.1 0.4-0.2 0.4z" />
<circle r="5" cy="300" cx="1000" stroke="black"/>
</g>
)
}

export default SaintLucia