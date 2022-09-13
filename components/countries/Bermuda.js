import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Bermuda = () => {

    const { bermudaColor } = useContext(ColorContext)

return (
<g className={'bermuda'}>
    <style jsx>{`
    .bermuda {
    fill: ${bermudaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M637.3 294l-0.3 0-0.1 0.1 0.1 0.2-0.4 0.2-0.1-0.1 0.2-0.1 0.1 0 0.1-0.3 0.3-0.1 0.1 0.1z" />
<circle r="5" cy="500" cx="505" stroke="black"/>
</g>
)
}

export default Bermuda