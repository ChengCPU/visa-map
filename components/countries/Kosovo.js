import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Kosovo = () => {

    const { kosovoColor } = useContext(ColorContext)

return (
<g className={'kosovo'}>
    <style jsx>{`
    .kosovo {
    fill: ${kosovoColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="228" cx="1095" stroke="black"/>
</g>
)
}

export default Kosovo