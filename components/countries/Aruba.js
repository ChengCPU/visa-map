import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Aruba = () => {

    const { arubaColor } = useContext(ColorContext)

return (
<g className={'aruba'}>
    <style jsx>{`
    .aruba {
    fill: ${arubaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M592.9 422l-0.5-0.2-0.5-0.5 0.1-0.6 0.2 0.3 0.4 0.4 0.3 0.5 0 0.1z" />
<circle r="5" cy="500" cx="993" stroke="black"/>
</g>
)
}

export default Aruba