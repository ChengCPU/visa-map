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
<circle r="5" cy="389" cx="660" stroke="black"/>
</g>
)
}

export default SintEustatius