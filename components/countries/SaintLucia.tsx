interface Props {
  lc:string;
  LC:boolean;
  setCountrySelect:Function;
}

const SaintLucia:React.FC<Props> = ({ lc, LC, setCountrySelect }) => {
  return (
    <g className={'saintLucia'} onMouseOver={() => setCountrySelect('saintLucia')}>
      <style jsx>{`
      .saintLucia {
        fill: ${lc};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="lc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#lc)" />
    </defs>
    <circle fill={LC ? "url(#lc)" : null} r="3.25" cy="419" cx="645" stroke="black"/>
    </g>
  )
}

export default SaintLucia