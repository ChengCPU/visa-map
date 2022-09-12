import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Tonga = () => {

    const { tongaColor } = useContext(ColorContext)

return (
<g className={'tonga'}>
    <style jsx>{`
    .tonga {
    fill: ${tongaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 14.7 639.5 14.2 639.2 14.2 639 14.5 638.8 14.7 639.5 Z" stroke="black"/>
<path d="M 11.9 637.4 12.2 637.4 12.6 637.7 12.9 637.8 13.1 637.4 13.4 637.7 13.1 638 13.2 638.2 13.1 638.4 12.9 638.3 12.6 638 11.9 637.8 11.9 637.4 Z" stroke="black"/>
<path d="M 11.1 628.8 10.9 628.9 10.8 628.4 11 628.5 11.1 628.8 Z" stroke="black"/>
<path d="M 15.5 621.3 15 621.6 14.8 621.6 14.7 621.5 15 621 15.3 621.1 15.5 621.3 Z" stroke="black"/>
<path d="M 1.4 602 1.3 602.1 1 602 1.1 601.8 1.4 601.8 1.4 602 Z" stroke="black"/>
<circle r="5" cy="475" cx="1100" stroke="black"/>
</g>
)
}

export default memo(Tonga)