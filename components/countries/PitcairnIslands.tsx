interface Props {
  pn:string;
  PN:boolean;
  setCountrySelect:Function;
}

const PitcairnIslands:React.FC<Props> = ({ pn, PN, setCountrySelect }) => {
  return (
    <g className={'pitcairnIslands'} onMouseOver={() => setCountrySelect('pitcairnIslands')}>
      <style jsx>{`
      .pitcairnIslands {
        fill: ${pn};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="pn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pn)" />
    </defs>
    <circle fill={PN && "url(#pn)"} r="5" cy="660" cx="300" stroke="black"/>
    </g>
  )
}

export default PitcairnIslands