import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Tokelau = () => {

    const { tokelauColor } = useContext(ColorContext)

return (
<g className={'tokelau'}>
    <style jsx>{`
    .tokelau {
    fill: ${tokelauColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="550" cx="1200" stroke="black"/>
</g>
)
}

export default memo(Tokelau)