import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Lithuania = () => {

    const { lithuaniaColor } = useContext(ColorContext)

return (
<g className={'lithuania'}>
    <style jsx>{`
    .lithuania {
    fill: ${lithuaniaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1111.1 147.6l1 2.7-3.6 2-0.5 3.4-4.8 2.3-4.7 0-1.4-1.9-2.5-0.7-0.6-1.5 0.2-1.7-2.2-0.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9 0.4 4.5-0.6 0.9 1.2 2.5 0.4 5 2.9z" stroke="black"/>
</g>
)
}

export default Lithuania