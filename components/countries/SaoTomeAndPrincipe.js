import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaoTomeAndPrincipe = () => {

    const { saoTomeAndPrincipeColor } = useContext(ColorContext)

return (
<g className={'saoTomeAndPrincipe'}>
    <style jsx>{`
    .saoTomeAndPrincipe {
    fill: ${saoTomeAndPrincipeColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1023.9 501.3 1023.7 501.3 1023.5 501.6 1023.3 501.6 1023.2 501.2 1023 500.4 1023 500.1 1023.4 499.6 1023.7 499.5 1024 499.2 1024.4 499.3 1024.6 499.7 1024.7 500 1024.6 500.4 1024.4 500.7 1024.1 501.1 1023.9 501.3 Z" stroke="black"/>
<path d="M 1028.5 491.5 1028.4 491.8 1028.2 491.9 1027.9 491.8 1027.9 491.5 1028.1 491.4 1028.1 491.1 1028.3 490.9 1028.6 491 1028.5 491.5 Z" stroke="black"/>
<circle r="5" cy="700" cx="1200" stroke="black"/>
</g>
)
}

export default memo(SaoTomeAndPrincipe)