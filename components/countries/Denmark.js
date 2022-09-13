import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Denmark = () => {

    const { denmarkColor } = useContext(ColorContext)

return (
<g className={'denmark'}>
    <style jsx>{`
    .denmark {
    fill: ${denmarkColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1046.1 147.7 1043.7 152.6 1038.5 149.1 1037.6 146.6 1044.4 144.6 1046.1 147.7 Z" stroke="black"/>
<path d="M 1033.3 151.5 1030.4 152.4 1026.7 151.6 1024.6 148.2 1024.2 142.1 1024.8 140.4 1026.1 138.6 1030.1 138.3 1031.7 136.6 1035.3 134.9 1035.3 138 1034.1 140 1034.8 141.6 1037.4 142.5 1036.4 144.8 1035 144.2 1031.9 148.5 1033.3 151.5 Z" stroke="black"/>
</g>
)
}

export default Denmark