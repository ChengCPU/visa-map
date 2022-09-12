import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Micronesia = () => {

    const { micronesiaColor } = useContext(ColorContext)

return (
<g className={'micronesia'}>
    <style jsx>{`
    .micronesia {
    fill: ${micronesiaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1909.4 467.7 1909.2 468 1908.7 467.9 1908.7 467.7 1909.2 467.3 1909.4 467.7 Z" stroke="black"/>
<path d="M 1881.2 457.1 1881.6 457.1 1881.9 457.3 1882 457.7 1881.8 457.8 1881.9 458 1881.8 458.2 1881.2 458.2 1881 458 1881 457.8 1880.8 457.5 1880.8 457.2 1881.2 457.1 Z" stroke="black"/>
<path d="M 1766.5 440.5 1766.6 440.8 1766.3 440.8 1766 441.3 1765.9 441.2 1766.2 440.4 1766.6 440.3 1766.5 440.5 Z" stroke="black"/>
<circle r="5" cy="200" cx="1200" stroke="black"/>
</g>
)
}

export default memo(Micronesia)