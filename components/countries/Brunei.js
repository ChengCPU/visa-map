import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Brunei = () => {

    const { bruneiColor } = useContext(ColorContext)

return (
<g className={'brunei'}>
    <style jsx>{`
    .brunei {
    fill: ${bruneiColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z" />
<circle r="5" cy="500" cx="525" stroke="black"/>
</g>
)
}

export default Brunei
