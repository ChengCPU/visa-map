interface Props {
  gf:string;
  GF:boolean;
  setCountrySelect:Function;
  hover:string;
}

const FrenchGuiana:React.FC<Props> = ({ gf, GF, setCountrySelect, hover }) => {
  return (
    <g className={'frenchGuiana'} onMouseOver={() => setCountrySelect(hover)}>
      <style jsx>{`
      .frenchGuiana {
        fill: ${gf};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="gf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gf)" />
    </defs>
    <path fill={GF ? "url(#gf)" : null} d="M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z" stroke="black"/>
    </g>
  )
}

export default FrenchGuiana