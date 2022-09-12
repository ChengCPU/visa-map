import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Uganda = () => {

    const { ugandaColor } = useContext(ColorContext)

return (
<g className={'uganda'}>
    <style jsx>{`
    .uganda {
    fill: ${ugandaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1179 474.5l2.7 4.5 0.7 3.2 2.6 7.4-2.1 4.7-2.8 4.2-1.6 2.6 0 0.3-0.2-0.4-3-1.3-2.4 1.6-3.6 0.9-2.6 3.7 0.3 2.5-6.2-0.1-2 0.8-3.4 2-1.4-0.7 0.1-4.8 1.3-2.5 0.3-5.1 1.2-3 2.2-3.3 2.1-1.8 1.9-2.2-2.3-0.9 0.3-7.5 2.3-1.8 3.6 1.5 4.5-1.5 4 0 3.5-3z" stroke="black"/>
</g>
)
}

export default memo(Uganda)