import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const NorthernMarianaIslands = () => {

    const { northernMarianaIslandsColor } = useContext(ColorContext)

return (
<g className={'northernMarianaIslands'}>
    <style jsx>{`
    .northernMarianaIslands {
    fill: ${northernMarianaIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1802.5 411.1 1802.4 411.2 1802.2 411.1 1802.1 410.9 1802.6 410.7 1802.8 410.9 1802.5 411.1 Z" />
<path d="M 1804 406 1803.8 406 1803.5 405.4 1803.6 405.1 1803.9 405.1 1803.9 405.4 1804.1 405.6 1804 406 Z" />
<path d="M 1804.5 404.4 1804.3 404.6 1804.4 404.9 1804 404.9 1804 404.2 1804.1 404 1804.5 403.8 1804.4 404.3 1804.5 404.4 Z" />
<path d="M 1802.6 396.9 1802.3 396.9 1802.2 396.7 1802.6 396.7 1802.6 396.9 Z" />
<path d="M 1800.7 385.9 1800.6 385.7 1800.6 385.2 1800.9 385.1 1801.1 385.4 1800.7 385.9 Z" />
<path d="M 1799.5 381.6 1799.1 381.5 1799.1 381.2 1799.3 381.1 1799.5 381.3 1799.5 381.6 Z" />
<circle r="5" cy="270" cx="1350" stroke="black"/>
</g>
)
}

export default NorthernMarianaIslands