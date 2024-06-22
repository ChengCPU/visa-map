interface Props {
  sh:string;
  SH:boolean;
  setCountrySelect:Function;
}

const SaintHelena:React.FC<Props> = ({ sh, SH, setCountrySelect }) => {
  return (
    <g className={'saintHelena'} onMouseOver={() => setCountrySelect('saintHelena')}>
      <style jsx>{`
      .saintHelena {
        fill: ${sh};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sh)" />
    </defs>
    <circle fill={SH && "url(#sh)"} r="5" cy="600" cx="947" stroke="black"/>
    </g>
  )
}

export default SaintHelena