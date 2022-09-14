import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Belize = () => {

    const { belizeColor } = useContext(ColorContext)

return (
<g className={'belize'}>
    <style jsx>{`
    .belize {
    fill: ${belizeColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z" />
<circle r="5" cy="392" cx="490" stroke="black"/>
</g>
)
}

export default Belize