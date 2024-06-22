interface Props {
  kn:string;
  KN:boolean;
  setCountrySelect:Function;
}

const SaintKittsAndNevis:React.FC<Props> = ({ kn, KN, setCountrySelect }) => {
  return (
    <g className={'saintKittsAndNevis'} onMouseOver={() => setCountrySelect('saintKittsAndNevis')}>
      <style jsx>{`
      .saintKittsAndNevis {
        fill: ${kn};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="kn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kn)" />
    </defs>
    <circle fill={KN && "url(#kn)"} r="3.25" cy="395" cx="635" stroke="black"/>
    </g>
  )
}

export default SaintKittsAndNevis