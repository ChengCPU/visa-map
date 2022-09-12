import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Samoa = () => {

    const { samoaColor } = useContext(ColorContext)

return (
<g className={'samoa'}>
    <style jsx>{`
    .samoa {
    fill: ${samoaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 21.9 591.3 22.2 591.4 22.5 591.5 22.8 591.7 22.7 592 21.7 592 21.4 591.9 21.1 592 20.9 591.9 20.5 591.7 20.2 591.8 19.9 591.6 19.7 591.4 19.1 591.1 19.2 590.7 19.6 590.5 20 590.5 20.5 590.5 21.4 590.9 21.9 591 21.9 591.3 Z" stroke="black"/>
<path d="M 17.4 588.5 18 589.1 18.2 589.8 18.1 590.1 18.2 590.4 17.9 590.4 17.6 590.2 17.3 590.4 16.4 590.5 16.1 590.2 15.9 589.8 15.7 589.7 15.4 589.4 14.9 589 14.7 588.8 14.7 588.6 15.1 588.7 15.4 588.6 16 588.4 16.4 588.4 16.9 588.3 17.2 588.3 17.4 588.5 Z" stroke="black"/>
<circle r="5" cy="800" cx="993" stroke="black"/>
</g>
)
}

export default memo(Samoa)