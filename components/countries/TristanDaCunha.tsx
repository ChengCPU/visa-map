interface Props {
  tx:string;
  TX:boolean;
  setCountrySelect:Function;
}

const TristanDaCunha:React.FC<Props> = ({ tx, TX, setCountrySelect }) => {
  return (
    <g className={'tristanDaCunha'} onMouseOver={() => setCountrySelect('tristanDaCunha')}>
      <style jsx>{`
      .tristanDaCunha {
        fill: ${tx};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tx" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tx)" />
    </defs>
    <circle fill={TX && "url(#tx)"} r="4" cy="745" cx="910" stroke="black"/>
    </g>
  )
}

export default TristanDaCunha