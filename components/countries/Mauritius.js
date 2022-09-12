import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Mauritius = () => {

    const { mauritiusColor } = useContext(ColorContext)

return (
<g className={'mauritius'}>
    <style jsx>{`
    .mauritius {
    fill: ${mauritiusColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1307.7 630.8 1308.1 631.7 1307.9 632.3 1307.5 632.7 1307.6 633 1307.3 633.3 1306.8 633.5 1306.3 633.5 1305.7 633.4 1305.6 633.5 1305.3 633.2 1305.5 633 1305.6 632.6 1305.7 631.9 1305.9 631.5 1306.4 631.1 1306.5 630.9 1306.7 630.4 1307.1 630.1 1307.5 630.2 1307.7 630.8 Z" stroke="black"/>
<path d="M 1339.5 628.7 1339.2 628.4 1339.6 628.2 1339.9 628.1 1340.1 628.2 1340 628.4 1339.5 628.7 Z" stroke="black"/>
<circle r="5" cy="200" cx="1000" stroke="black"/>
</g>
)
}

export default memo(Mauritius)