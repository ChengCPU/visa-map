interface Props {
  vg:string;
  VG:boolean;
  setCountrySelect:Function;
}

const BritishVirginIslands:React.FC<Props> = ({ vg, VG, setCountrySelect }) => {
  return (
    <g className={'britishVirginIslands'} onMouseOver={() => setCountrySelect('britishVirginIslands')}>
      <style jsx>{`
      .britishVirginIslands {
        fill: ${vg};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="vg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#vg)" />
    </defs>
    <circle fill={VG ? "url(#vg)" : null} r="2.5" cy="382" cx="625" stroke="black"/>
    </g>
  )
}

export default BritishVirginIslands
