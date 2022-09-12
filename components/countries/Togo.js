import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Togo = () => {

    const { togoColor } = useContext(ColorContext)

return (
<g className={'togo'}>
    <style jsx>{`
    .togo {
    fill: ${togoColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z" stroke="black"/>
</g>
)
}

export default memo(Togo)