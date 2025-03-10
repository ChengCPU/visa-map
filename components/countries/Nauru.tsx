interface Props {
  nr:string;
  NR:boolean;
  setCountrySelect:Function;
}

const Nauru:React.FC<Props> = ({ nr, NR, setCountrySelect }) => {
  return (
    <g className={'nauru'} onMouseOver={() => setCountrySelect('nauru')}>
      <style jsx>{`
      .nauru {
        fill: ${nr};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="nr" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#nr)" />
    </defs>
    <circle fill={NR ? "url(#nr)" : null} r="5" cy="505" cx="1933" stroke="black"/>
    </g>
  )
}

export default Nauru