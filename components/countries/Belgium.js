import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Belgium = () => {

    const { belgiumColor } = useContext(ColorContext)

return (
<g className={'belgium'}>
    <style jsx>{`
    .belgium {
    fill: ${belgiumColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z" stroke="black"/>
</g>
)
}
    
export default Belgium