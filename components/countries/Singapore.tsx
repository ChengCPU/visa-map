interface Props {
  sg:string;
  SG:boolean;
  setCountrySelect:Function;
}

const Singapore:React.FC<Props> = ({ sg, SG, setCountrySelect }) => {
  return (
    <g className={'singapore'} onMouseOver={() => setCountrySelect('singapore')}>
      <style jsx>{`
      .singapore {
        fill: ${sg};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sg)" />
    </defs>
    <circle fill={SG ? "url(#sg)" : null} r="5" cy="492" cx="1575" stroke="black"/>
    </g>
  )
}

export default Singapore