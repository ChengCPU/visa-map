import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SintEustatius = () => {

    const { sintEustatiusColor } = useContext(ColorContext)

return (
<g className={'sintEustatius'}>
    <style jsx>{`
    .sintEustatius {
    fill: ${sintEustatiusColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M634.3 389.6l-0.2 0.1 0-0.2 0.1-0.1 0.1 0.2z" />
<circle r="5" cy="175" cx="1150" stroke="black"/>
</g>
)
}

export default SintEustatius