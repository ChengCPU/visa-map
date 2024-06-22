interface Props {
  tv:string;
  TV:boolean;
  setCountrySelect:Function;
}

const Tuvalu:React.FC<Props> = ({ tv, TV, setCountrySelect }) => {
  return (
    <g className={'tuvalu'} onMouseOver={() => setCountrySelect('tuvalu')}>
      <style jsx>{`
      .tuvalu {
        fill: ${tv};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tv)" />
    </defs>
    <circle fill={TV && "url(#tv)"} r="5" cy="556" cx="1998" stroke="black"/>
    </g>
  )
}

export default Tuvalu