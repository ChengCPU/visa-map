interface Props {
  pf:string;
  PF:boolean;
  setCountrySelect:Function;
}

const FrenchPolynesia:React.FC<Props> = ({ pf, PF, setCountrySelect }) => {
  return (
    <g className={'frenchPolynesia'} onMouseOver={() => setCountrySelect('frenchPolynesia')}>
      <style jsx>{`
      .frenchPolynesia {
        fill: ${pf};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="pf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pf)" />
    </defs>
    <circle fill={PF && "url(#pf)"} r="5" cy="614" cx="172" stroke="black"/>
    </g>
  )
}

export default FrenchPolynesia