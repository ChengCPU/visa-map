interface Props {
  mu:string;
  MU:boolean;
  setCountrySelect:Function;
}

const Mauritius:React.FC<Props> = ({ mu, MU, setCountrySelect }) => {
  return (
    <g className={'mauritius'} onMouseOver={() => setCountrySelect('mauritius')}>
      <style jsx>{`
      .mauritius {
        fill: ${mu};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mu)" />
    </defs>
    <circle fill={MU ? "url(#mu)" : null} r="5" cy="630" cx="1307" stroke="black"/>
    </g>
  )
}

export default Mauritius