import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Egypt = () => {

    const { egyptColor } = useContext(ColorContext)

return (
<g className={'egypt'}>
    <style jsx>{`
    .egypt {
    fill: ${egyptColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z" stroke="black"/>
</g>
)
}

export default Egypt