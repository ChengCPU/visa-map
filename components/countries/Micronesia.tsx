interface Props {
  fm:string;
  FM:boolean;
  setCountrySelect:Function;
}

const Micronesia:React.FC<Props> = ({ fm, FM, setCountrySelect }) => {
  return (
    <g className={'micronesia'} onMouseOver={() => setCountrySelect('micronesia')}>
      <style jsx>{`
      .micronesia {
        fill: ${fm};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="fm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#fm)" />
    </defs>
    <circle fill={FM ? "url(#fm)" : null} r="5" cy="457" cx="1881" stroke="black"/>
    </g>
  )
}

export default Micronesia