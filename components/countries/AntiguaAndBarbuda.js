import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const AntiguaAndBarbuda = () => {

    const { antiguaAndBarbudaColor } = useContext(ColorContext)

return (
<g className={'antiguaAndBarbuda'}>
    <style jsx>{`
    .antiguaAndBarbuda {
    fill: ${antiguaAndBarbudaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="390" cx="648" stroke="black"/>
</g>
)
}

export default AntiguaAndBarbuda