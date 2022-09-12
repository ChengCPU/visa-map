import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintBarthelemy = () => {

    const { saintBarthelemyColor } = useContext(ColorContext)

return (
<g className={'saintBarthelemy'}>
    <style jsx>{`
    .saintBarthelemy {
    fill: ${saintBarthelemyColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M635.2 387l-0.1-0.3 0.3 0.1-0.2 0.2z" stroke="black"/>
<circle r="5" cy="500" cx="1000" stroke="black"/>
</g>
)
}

export default memo(SaintBarthelemy)