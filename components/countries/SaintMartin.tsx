interface Props {
  mf:string;
  MF:boolean;
  setCountrySelect:Function;
}

const SaintMartin:React.FC<Props> = ({ mf, MF, setCountrySelect }) => {
  return (
    <g className={'saintMartin'} onMouseOver={() => setCountrySelect('saintMartin')}>
      <style jsx>{`
      .saintMartin {
        fill: ${mf};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mf)" />
    </defs>
    <circle fill={MF && "url(#mf)"} r="2.5" cy="379" cx="630" stroke="black"/>
    </g>
  )
}

export default SaintMartin