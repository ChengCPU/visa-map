interface Props {
  gp:string;
  GP:boolean;
  setCountrySelect:Function;
}

const Guadeloupe:React.FC<Props> = ({ gp, GP, setCountrySelect }) => {
  return (
    <g className={'guadeloupe'} onMouseOver={() => setCountrySelect('guadeloupe')}>
      <style jsx>{`
      .guadeloupe {
        fill: ${gp};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gp" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gp)" />
    </defs>
    <circle fill={GP ? "url(#gp)" : null} r="2.5" cy="403" cx="642" stroke="black"/>
    </g>
  )
}

export default Guadeloupe