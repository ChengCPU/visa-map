import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Montserrat = () => {

    const { montserratColor } = useContext(ColorContext)

return (
<g className={'montserrat'}>
    <style jsx>{`
    .montserrat {
    fill: ${montserratColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M638.2 393.9l0.2 0.4 0 0.3-0.2 0.2-0.2-0.1-0.1-0.3 0.3-0.5z" />
<circle r="3" cy="404" cx="638" stroke="black"/>
</g>
)
}

export default Montserrat