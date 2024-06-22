interface Props {
  re:string;
  RE:boolean;
  setCountrySelect:Function;
}

const Reunion:React.FC<Props> = ({ re, RE, setCountrySelect }) => {
  return (
    <g className={'reunion'} onMouseOver={() => setCountrySelect('reunion')}>
      <style jsx>{`
      .reunion {
        fill: ${re};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="re" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#re)" />
    </defs>
    <circle fill={RE && "url(#re)"} r="4" cy="635" cx="1295" stroke="black"/>
    </g>
  )
}

export default Reunion