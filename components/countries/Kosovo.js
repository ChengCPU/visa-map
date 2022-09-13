import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Kosovo = () => {

    const { kosovoColor } = useContext(ColorContext)

return (
<g className={'kosovo'}>
    <style jsx>{`
    .kosovo {
    fill: ${kosovoColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1097.8 230.8l-1.2 0.3-2.9 1-0.1 1.3-0.7-0.1-0.6-2.3-1.3-0.7-1.2-1.7 0.8-1.4 1.2-0.4 0.5-2.1 0.9-0.4 0.8 0.9 1 0.4 0.8 1 0.9 0.3 1.1 1.2 0.7-0.1-0.4 1.6-0.6 0.7 0.3 0.5z" />
<circle r="5" cy="380" cx="1500" stroke="black"/>
</g>
)
}

export default Kosovo