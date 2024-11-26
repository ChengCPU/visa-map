interface Props {
  ab:string;
  AB:boolean;
  setCountrySelect:Function;
}

const Abkhazia:React.FC<Props> = ({ ab, AB, setCountrySelect }) => {
  return (
    <g className={'abkhazia'} onMouseOver={() => setCountrySelect('abkhazia')}>
      <style jsx>{`
      .abkhazia {
        fill: ${ab};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ab" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ab)" />
    </defs>
    <circle fill={AB ? "url(#ab)" : null} r="3.5" cy="227" cx="1199" stroke="black"/>
    </g>
  )
}

export default Abkhazia