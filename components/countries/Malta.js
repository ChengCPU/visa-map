import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Malta = () => {

    const { maltaColor } = useContext(ColorContext)

return (
<g className={'malta'}>
    <style jsx>{`
    .malta {
    fill: ${maltaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="271" cx="1062" stroke="black"/>
</g>
)
}

export default Malta