interface Props {
  va:string;
  VA:boolean;
  setCountrySelect:Function;
}

const VaticanCity:React.FC<Props> = ({ va, VA, setCountrySelect }) => {
  return (
    <g className={'vaticanCity'} onMouseOver={() => setCountrySelect('vaticanCity')}>
      <style jsx>{`
      .vaticanCity {
        fill: ${va};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="va" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#va)" />
    </defs>
    <circle fill={VA ? "url(#va)" : null} r="4" cy="235" cx="1053" stroke="black"/>
    </g>
  )
}

export default VaticanCity