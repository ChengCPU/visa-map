import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Philippines = () => {

    const { philippinesColor } = useContext(ColorContext)

return (
<g className={'philippines'}>
    <style jsx>{`
    .philippines {
    fill: ${philippinesColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1700.5 447.8 1701.4 452.1 1702 455.7 1700.4 461.5 1697.9 455 1695.5 458.3 1697.6 463 1696.2 466 1689.3 462.3 1687.4 457.6 1688.9 454.6 1685.1 451.5 1683.5 454.2 1680.9 453.9 1676.9 457.5 1675.9 455.6 1677.7 450.2 1681.1 448.4 1684 446 1686.2 448.9 1690.4 447.2 1691.1 444.3 1695.1 444.1 1694.3 439.2 1699.2 442.2 1699.9 445.4 1700.5 447.8 Z" stroke="black"/>
<path d="M 1685.9 435.8 1684.1 437.9 1682.7 442 1681.1 443.9 1677.2 439.5 1678.2 437.7 1679.5 435.9 1679.7 432 1682.8 431.6 1682.3 435.9 1685.9 429.7 1685.9 435.8 Z" stroke="black"/>
<path d="M 1655.6 442 1648.5 448.1 1650.9 443.6 1654.7 439.6 1657.7 435.2 1660 428.8 1661.6 434.1 1658.1 437.6 1655.6 442 Z" stroke="black"/>
<path d="M 1673.1 425.5 1676.7 427.5 1680.2 427.5 1680.4 430.1 1678.1 432.9 1674.7 434.8 1674.2 431.8 1674.3 428.5 1673.1 425.5 Z" stroke="black"/>
<path d="M 1693.2 423.7 1695.6 430.9 1691.1 429.2 1691.4 431.4 1693.2 435.3 1690.6 436.8 1690 432.2 1688.2 431.9 1687 428 1690.3 428.5 1690 426.1 1686 421.2 1691.4 421.3 1693.2 423.7 Z" stroke="black"/>
<path d="M 1670.2 417.9 1669.3 423.5 1666.6 420.3 1663.1 415.4 1667.9 415.6 1670.2 417.9 Z" stroke="black"/>
<path d="M 1663.7 383 1667.5 384.9 1668.9 383.2 1669.7 384.8 1669.3 387.5 1671.9 392.1 1671.3 397.4 1668.4 399.5 1668.3 404.7 1670.3 409.8 1673.3 410.5 1675.7 409.8 1683.2 413.3 1683.1 416.8 1685.2 418.4 1684.9 421.3 1680.2 418.2 1677.7 414.8 1676.5 417.2 1672.5 413.3 1667.5 414.3 1664.5 412.9 1664.4 410.2 1666 408.6 1664.1 407.1 1663.7 409.4 1660.4 405.7 1659.1 402.9 1658 396.8 1660.6 398.9 1659.5 388.8 1660.3 383 1663.7 383 Z" stroke="black"/>
</g>
)
}

export default Philippines