import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Kyrgyzstan = () => {

    const { kyrgyzstanColor } = useContext(ColorContext)

return (
<g className={'kyrgyzstan'}>
    <style jsx>{`
    .kyrgyzstan {
    fill: ${kyrgyzstanColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1400.5 230.2l-0.2 1.4-6.9 3.4-1 2.6-6.4 0.7-0.6 4.1-5.8-0.9-3.2 1.3-4.1 3 1.2 1.5-1.1 1.4-9.6 1-7.1-2.1-5.5 0.5-0.6-3.6 6 1 1.4-1.9 4.1 0.6 5.3-4.6-7.2-3.4-3.2 1.6-4.6-2.4 3-4.1-1.7-0.6 0.3-2.8 3.1-0.9 9.2 2.2-0.5-3.7 2.5-1.4 8.2 2.7 1.6-0.7 8.6 0.2 7.9 0.6 3.4 2.3 3.5 1z" stroke="black"/>
</g>
)
}

export default memo(Kyrgyzstan)