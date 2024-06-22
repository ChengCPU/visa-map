interface Props {
  tc:string;
  TC:boolean;
  setCountrySelect:Function;
}

const TurksAndCaicos:React.FC<Props> = ({ tc, TC, setCountrySelect }) => {
  return (
    <g className={'turksAndCaicos'} onMouseOver={() => setCountrySelect('turksAndCaicos')}>
      <style jsx>{`
      .turksAndCaicos {
        fill: ${tc};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tc)" />
    </defs>
    <circle fill={TC && "url(#tc)"} r="4" cy="361" cx="587" stroke="black"/>
    </g>
  )
}

export default TurksAndCaicos