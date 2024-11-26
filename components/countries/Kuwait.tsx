interface Props {
  kw:string;
  KW:boolean;
  setCountrySelect:Function;
}

const Kuwait:React.FC<Props> = ({ kw, KW, setCountrySelect }) => {
  return (
    <g className={'kuwait'} onMouseOver={() => setCountrySelect('kuwait')}>
      <style jsx>{`
      .kuwait {
        fill: ${kw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="kw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kw)" />
    </defs>
    <path d="M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z" />
    <circle fill={KW ? "url(#kw)" : null} r="5" cy="313" cx="1247" stroke="black"/>
    </g>
  )
}

export default Kuwait