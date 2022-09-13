import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Jersey = () => {

    const { jerseyColor } = useContext(ColorContext)

return (
<g className={'jersey'}>
    <style jsx>{`
    .jersey {
    fill: ${jerseyColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="1350" stroke="black"/>
</g>
)
}

export default Jersey