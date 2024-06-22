interface Props {
  pw:string;
  PW:boolean;
  setCountrySelect:Function;
}

const Palau:React.FC<Props> = ({ pw, PW, setCountrySelect }) => {
  return (
    <g className={'palau'} onMouseOver={() => setCountrySelect('palau')}>
      <style jsx>{`
      .palau {
        fill: ${pw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="pw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pw)" />
    </defs>
    <circle fill={PW && "url(#pw)"} r="5" cy="453" cx="1747" stroke="black"/>
    </g>
  )
}

export default Palau