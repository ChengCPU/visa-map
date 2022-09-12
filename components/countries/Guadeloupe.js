import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guadeloupe = () => {

    const { guadeloupeColor } = useContext(ColorContext)

return (
<g className={'guadeloupe'}>
    <style jsx>{`
    .guadeloupe {
    fill: ${guadeloupeColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 643 399.9 642.7 399.9 642.5 399.5 642.6 399.3 642.9 399 643.2 399.2 643.3 399.5 643.3 399.7 643 399.9 Z" stroke="black"/>
<path d="M 641.2 397.3 641.5 397.3 641.5 397.5 641.5 397.6 641.3 397.7 641.3 398.5 641.3 398.9 641.1 399.1 640.5 399.4 640.5 399.2 640.3 399 640.2 398.5 640.2 398 640.1 397.5 640.1 397.2 640.3 396.9 640.6 396.8 641.1 397.1 641.2 397.3 Z" stroke="black"/>
<path d="M 642.6 396.9 643 397 643.5 397.4 642.2 397.7 641.9 397.8 641.5 397.5 641.6 396.9 641.8 396.8 641.7 396.2 641.8 396 642.1 395.8 642.4 396.2 642.4 396.6 642.6 396.9 Z" stroke="black"/>
</g>
)
}

export default memo(Guadeloupe)