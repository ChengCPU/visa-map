import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const TrinidadAndTobago = () => {

    const { trinidadAndTobagoColor } = useContext(ColorContext)

return (
<g className={'trinidadAndTobago'}>
    <style jsx>{`
    .trinidadAndTobago {
    fill: ${trinidadAndTobagoColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 642.8 432.2 642.6 432.7 642.3 433.1 642.1 433.2 642 433.6 642.2 434.2 642 434.3 642 435 642.2 435.3 642.4 435.5 642.2 435.7 642.1 436 642.1 436.7 641.9 436.8 641.5 437 641 437.1 640.7 437.1 640.2 437.2 639.7 437.1 639.3 437.2 639 437.1 638.5 437.3 638.1 437.1 637.5 437.1 637.2 437.3 636.9 437.2 637.4 437 637.7 436.7 638.1 436.6 638.5 436.3 638.7 436 639.3 436.1 639.6 435.7 639.4 434.9 639.6 434.5 639.6 434 639.6 433.8 639.3 433.4 639 433.3 638.6 433.2 638.5 433.1 638.9 432.8 640 432.7 640.2 432.5 641.3 432.5 641.4 432.4 642.6 432.2 642.8 432.2 Z" />
<path d="M 645.2 429 645.1 429.5 644.8 429.6 644.4 429.9 644.2 429.9 643.5 430.3 643.3 430.1 643.6 429.8 644.3 429.3 645.2 429 Z" />
<circle r="5" cy="100" cx="1600" stroke="black"/>
</g>
)
}

export default TrinidadAndTobago