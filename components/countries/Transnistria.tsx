interface Props {
  xt:string;
  XT:boolean;
  setCountrySelect:Function;
}

const Transnistria:React.FC<Props> = ({ xt, XT, setCountrySelect }) => {
  return (
    <g className={'transnistria'} onMouseOver={() => setCountrySelect('transnistria')}>
      <style jsx>{`
      .transnistria {
        fill: ${xt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="xt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#xt)" />
    </defs>
    <circle fill={XT && "url(#xt)"} r="2.5" cy="198" cx="1132.7" stroke="black"/>
    </g>
  )
}

export default Transnistria