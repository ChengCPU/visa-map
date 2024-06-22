interface Props {
  gi:string;
  GI:boolean;
  setCountrySelect:Function;
}

const Gibraltar:React.FC<Props> = ({ gi, GI, setCountrySelect }) => {
  return (
    <g className={'gibraltar'} onMouseOver={() => setCountrySelect('gibraltar')}>
      <style jsx>{`
      .gibraltar {
        fill: ${gi};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gi" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gi)" />
    </defs>
    <circle fill={GI && "url(#gi)"} r="4" cy="270" cx="958" stroke="black"/>
    </g>
  )
}

export default Gibraltar