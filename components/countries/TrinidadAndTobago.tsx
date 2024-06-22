interface Props {
  tt:string;
  TT:boolean;
  setCountrySelect:Function;
}

const TrinidadAndTobago:React.FC<Props> = ({ tt, TT, setCountrySelect }) => {
  return (
    <g className={'trinidadAndTobago'} onMouseOver={() => setCountrySelect('trinidadAndTobago')}>
      <style jsx>{`
      .trinidadAndTobago {
        fill: ${tt};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tt)" />
    </defs>
    <circle fill={TT && "url(#tt)"} r="3.25" cy="435" cx="640" stroke="black"/>
    </g>
  )
}

export default TrinidadAndTobago