interface Props {
  km:string;
  KM:boolean;
  setCountrySelect:Function;
}

const Comoros:React.FC<Props> = ({ km, KM, setCountrySelect }) => {
  return (
    <g className={'comoros'} onMouseOver={() => setCountrySelect('comoros')}>
      <style jsx>{`
      .comoros {
        fill: ${km};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="km" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#km)" />
    </defs>
    <circle fill={KM ? "url(#km)" : null} r="5" cy="576" cx="1234" stroke="black"/>
    </g>
  )
}

export default Comoros