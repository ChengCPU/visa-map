import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const WallisAndFutuna = () => {

    const { wallisAndFutunaColor } = useContext(ColorContext)

return (
<g className={'wallisAndFutuna'}>
    <style jsx>{`
    .wallisAndFutuna {
    fill: ${wallisAndFutunaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="590" cx="2015" stroke="black"/>
</g>
)
}

export default WallisAndFutuna