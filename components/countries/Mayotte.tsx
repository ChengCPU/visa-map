interface Props {
  yt:string;
  YT:boolean;
  setCountrySelect:Function;
}

const Mayotte:React.FC<Props> = ({ yt, YT, setCountrySelect }) => {
  return (
    <g className={'mayotte'} onMouseOver={() => setCountrySelect('mayotte')}>
      <style jsx>{`
      .mayotte {
        fill: ${yt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="yt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#yt)" />
    </defs>
    <circle fill={YT ? "url(#yt)" : null} r="4" cy="585" cx="1242" stroke="black"/>
    </g>
  )
}

export default Mayotte