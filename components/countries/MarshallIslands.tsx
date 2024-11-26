interface Props {
  mh:string;
  MH:boolean;
  setCountrySelect:Function;
}

const MarshallIslands:React.FC<Props> = ({ mh, MH, setCountrySelect }) => {
  return (
    <g className={'marshallIslands'} onMouseOver={() => setCountrySelect('marshallIslands')}>
      <style jsx>{`
      .marshallIslands {
        fill: ${mh};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mh)" />
    </defs>
    <circle fill={MH ? "url(#mh)" : null} r="5" cy="456" cx="1953" stroke="black"/>
    </g>
  )
}

export default MarshallIslands