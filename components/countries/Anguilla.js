import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Anguilla = () => {

    const { anguillaColor } = useContext(ColorContext)

return (
<g className={'anguilla'}>
    <style jsx>{`
    .anguilla {
    fill: ${anguillaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="900" cx="993" stroke="black"/>
</g>
)
}
  
export default memo(Anguilla)