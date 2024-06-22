interface Props {
  pm:string;
  PM:boolean;
  setCountrySelect:Function;
}

const SaintPierreAndMiquelon:React.FC<Props> = ({ pm, PM, setCountrySelect }) => {
  return (
    <g className={'saintPierreAndMiquelon'} onMouseOver={() => setCountrySelect('saintPierreAndMiquelon')}>
      <style jsx>{`
      .saintPierreAndMiquelon {
        fill: ${pm};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="pm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pm)" />
    </defs>
    <circle fill={PM && "url(#pm)"} r="5" cy="202" cx="707" stroke="black"/>
    </g>
  )
}

export default SaintPierreAndMiquelon