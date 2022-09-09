import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Burundi = () => {

    const { burundiColor } = useContext(ColorContext)

return (
<g className={'burundi'}>
    <style jsx>{`
    .burundi {
    fill: ${burundiColor};
    }
    `}</style>
<path d="M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1-0.01-0.06-0.09-1.04-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z" />
<circle r="5" cy="500" cx="530" stroke="black"/>
</g>
)
}

export default memo(Burundi)