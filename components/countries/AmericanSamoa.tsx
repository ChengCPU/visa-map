interface Props {
  as:string;
  AS:boolean;
  setCountrySelect:Function;
}

const AmericanSamoa:React.FC<Props> = ({ as, AS, setCountrySelect }) => {
  return (
    <g className={'americanSamoa'} onMouseOver={() => setCountrySelect('americanSamoa')}>
      <style jsx>{`
      .americanSamoa {
        fill: ${as};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="as" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#as)" />
    </defs>
    <circle fill={AS && "url(#as)"} r="5" cy="596" cx="29" stroke="black"/>
    </g>
  )
}

export default AmericanSamoa