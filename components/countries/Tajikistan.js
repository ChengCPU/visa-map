import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Tajikistan = () => {

    const { tajikistanColor } = useContext(ColorContext)

return (
<g className={'tajikistan'}>
    <style jsx>{`
    .tajikistan {
    fill: ${tajikistanColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1357 243.6l-1.4 1.9-6-1 0.6 3.6 5.5-0.5 7.1 2.1 9.6-1 3.1 6 1.5-0.7 3.7 1.5 0.5 2.5 1.8 3.6-5.4 0-3.8-0.5-2.5 2.9-2.2 0.6-1.5 1.4-2.7-2.1-0.9-5.4-1.7-0.3 0.1-2-3.3-1.4-1.7 2.2 0.2 2.6-0.6 0.9-3.2-0.1-0.9 2.9-2.1-1.2-3.4 2-1.8-0.7 1.3-6.5-2.4-4.8-4.2-1.5 0.6-2.8 4.4 0.3 1.5-3.5 0.5-4.1 6.5-1.5-0.2 3 1.3 1.7 2.1-0.1z" stroke="black"/>
</g>
)
}

export default memo(Tajikistan)