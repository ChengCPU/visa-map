interface Props {
  vi:string;
  VI:boolean;
  setCountrySelect:Function;
}

const UnitedStatesVirginIslands:React.FC<Props> = ({ vi, VI, setCountrySelect }) => {
  return (
    <g className={'unitedStatesVirginIslands'} onMouseOver={() => setCountrySelect('unitedStatesVirginIslands')}>
      <style jsx>{`
      .unitedStatesVirginIslands {
        fill: ${vi};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="vi" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#vi)" />
    </defs>
    <circle fill={VI ? "url(#vi)" : null} r="2.5" cy="387" cx="622" stroke="black"/>
    </g>
  )
}

export default UnitedStatesVirginIslands