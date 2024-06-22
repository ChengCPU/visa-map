interface Props {
  jm:string;
  JM:boolean;
  setCountrySelect:Function;
}

const Jamaica:React.FC<Props> = ({ jm, JM, setCountrySelect }) => {
  return (
    <g className={'jamaica'} onMouseOver={() => setCountrySelect('jamaica')}>
      <style jsx>{`
      .jamaica {
        fill: ${jm};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="jm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#jm)" />
    </defs>
    <circle fill={JM && "url(#jm)"} r="5" cy="386" cx="554.5" stroke="black"/>
    </g>
  )
}

export default Jamaica