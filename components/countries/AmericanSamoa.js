import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const AmericanSamoa = () => {

    const { americanSamoaColor } = useContext(ColorContext)

return (
<g className={'americanSamoa'}>
    <style jsx>{`
    .americanSamoa {
    fill: ${americanSamoaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 27.7 593.3 27.4 593.7 27.2 594 27 594.1 26.6 593.8 26.8 593.6 27.1 593.6 27.2 593.4 27.7 593.3 Z" />
<path d="M 34.3 593.3 33.8 593.4 33.7 593.2 34.1 593.1 34.3 593.3 Z" />
<circle r="5" cy="600.994" cx="2050" stroke="black"/>
</g>
)
}

export default AmericanSamoa