interface Props {
  fo:string;
  FO:boolean;
  setCountrySelect:Function;
}

const FaroeIslands:React.FC<Props> = ({ fo, FO, setCountrySelect }) => {
  return (
  <g className={'faroeIslands'} onMouseOver={() => setCountrySelect('faroeIslands')}>
    <style jsx>{`
    .faroeIslands {
      fill: ${fo};
      stroke-width: 1;
    }
    `}</style>
  <defs>
    <pattern id="fo" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect className="checker" x="0" width="2" height="2" y="0"/>
      <rect className="checker" x="2" width="2" height="2" y="2"/>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#fo)" />
  </defs>
  <circle fill={FO && "url(#fo)"} r="5" cy="109" cx="954" stroke="black"/>
  </g>
  )
}

export default FaroeIslands