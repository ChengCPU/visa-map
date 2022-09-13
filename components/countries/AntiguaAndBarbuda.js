import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const AntiguaAndBarbuda = () => {

    const { antiguaAndBarbudaColor } = useContext(ColorContext)

return (
<g className={'antiguaAndBarbuda'}>
    <style jsx>{`
    .antiguaAndBarbuda {
    fill: ${antiguaAndBarbudaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 640.7 391.9 641.3 392.2 641.1 392.5 640.9 392.5 640.2 392.6 640 392.5 640 392 640.3 391.9 640.4 391.6 640.6 391.6 640.7 391.9 Z" />
<path d="M 640.7 388.2 640.9 388.2 641.1 388.4 641.2 388.8 641.1 389.1 640.9 389.2 640.8 389 640.5 388.8 640.5 388.3 640.7 388.2 Z" />
<circle r="5" cy="500.994" cx="2050" stroke="black"/>
</g>
)
}

export default AntiguaAndBarbuda