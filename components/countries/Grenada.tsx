interface Props {
  gd:string;
  GD:boolean;
  setCountrySelect:Function;
}

const Grenada:React.FC<Props> = ({ gd, GD, setCountrySelect }) => {
  return (
    <g className={'grenada'} onMouseOver={() => setCountrySelect('grenada')}>
      <style jsx>{`
      .grenada {
        fill: ${gd};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gd" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gd)" />
    </defs>
    <circle fill={GD ? "url(#gd)" : null} r="3.25" cy="428" cx="638" stroke="black"/>
    </g>
  )
}

export default Grenada