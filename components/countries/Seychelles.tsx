interface Props {
  sc:string;
  SC:boolean;
  setCountrySelect:Function;
}

const Seychelles:React.FC<Props> = ({ sc, SC, setCountrySelect }) => {
  return (
    <g className={'seychelles'} onMouseOver={() => setCountrySelect('seychelles')}>
      <style jsx>{`
      .seychelles {
        fill: ${sc};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="sc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#sc)" />
    </defs>
    <circle fill={SC ? "url(#sc)" : null} r="5" cy="531" cx="1300" stroke="black"/>
    </g>
  )
}

export default Seychelles