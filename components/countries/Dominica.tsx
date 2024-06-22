interface Props {
  dm:string;
  DM:boolean;
  setCountrySelect:Function;
}

const Dominica:React.FC<Props> = ({ dm, DM, setCountrySelect }) => {
  return (
    <g className={'dominica'} onMouseOver={() => setCountrySelect('dominica')}>
      <style jsx>{`
      .dominica {
        fill: ${dm};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="dm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dm)" />
    </defs>
    <circle fill={DM && "url(#dm)"} r="3.25" cy="409" cx="643" stroke="black"/>
    </g>
  )
}

export default Dominica