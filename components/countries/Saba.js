import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Saba = () => {

    const { sabaColor } = useContext(ColorContext)

return (
<g className={'saba'}>
    <style jsx>{`
    .saba {
    fill: ${sabaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M632.8 388.7l-0.1 0 0.1-0.2 0.1 0.1-0.1 0.1z" />
<circle r="5" cy="350" cx="1500" stroke="black"/>
</g>
)
}

export default Saba