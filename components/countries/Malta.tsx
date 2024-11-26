interface Props {
  mt:string;
  MT:boolean;
  setCountrySelect:Function;
}

const Malta:React.FC<Props> = ({ mt, MT, setCountrySelect }) => {
  return (
    <g className={'malta'} onMouseOver={() => setCountrySelect('malta')}>
      <style jsx>{`
      .malta {
        fill: ${mt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mt)" /> 
    </defs>
    <circle fill={MT ? "url(#mt)" : null} r="4" cy="271" cx="1062" stroke="black"/>
    </g>
  )
}

export default Malta