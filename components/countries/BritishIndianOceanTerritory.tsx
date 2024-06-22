interface Props {
  io:string;
  IO:boolean;
  setCountrySelect:Function;
}

const BritishIndianOceanTerritory:React.FC<Props> = ({ io, IO, setCountrySelect }) => {
  return (
    <g className={'britishIndianOceanTerritory'} onMouseOver={() => setCountrySelect('britishIndianOceanTerritory')}>
      <style jsx>{`
      .britishIndianOceanTerritory {
        fill: ${io};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="io" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#io)" />
    </defs>
    <circle fill={IO && "url(#io)"} r="5" cy="550" cx="1395" stroke="black"/>
    </g>
  )
}

export default BritishIndianOceanTerritory