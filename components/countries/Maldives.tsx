interface Props {
  mv:string;
  MV:boolean;
  setCountrySelect:Function;
}

const Maldives:React.FC<Props> = ({ mv, MV, setCountrySelect }) => {
  return (
    <g className={'maldives'} onMouseOver={() => setCountrySelect('maldives')}>
      <style jsx>{`
      .maldives {
        fill: ${mv};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mv)" />
    </defs>
    <circle fill={MV ? "url(#mv)" : null} r="5" cy="474" cx="1402" stroke="black"/>
    </g>
  )
}

export default Maldives