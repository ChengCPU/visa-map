interface Props {
  lu:string;
  LU:boolean;
  setCountrySelect:Function;
}

const Luxembourg:React.FC<Props> = ({ lu, LU, setCountrySelect }) => {
  return (
    <g className={'luxembourg'} onMouseOver={() => setCountrySelect('luxembourg')}>
      <style jsx>{`
      .luxembourg {
        fill: ${lu};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="lu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#lu)" />
    </defs>
    <circle fill={LU && "url(#lu)"} r="4" cy="185" cx="1016" stroke="black"/>
    </g>
  )
}

export default Luxembourg