import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Malta = () => {

    const { maltaColor } = useContext(ColorContext)

return (
<g className={'malta'}>
    <style jsx>{`
    .malta {
    fill: ${maltaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1063.9 271.7 1063.7 272 1063.2 271.8 1062.7 271.5 1062.7 271 1062.6 270.9 1063.2 270.9 1063.6 271.2 1063.8 271.4 1063.9 271.7 Z" />
<path d="M 1062.3 270.6 1061.8 270.5 1061.8 270.3 1062.2 270.2 1062.6 270.5 1062.3 270.6 Z" />
<circle r="5" cy="230" cx="1600" stroke="black"/>
</g>
)
}

export default Malta