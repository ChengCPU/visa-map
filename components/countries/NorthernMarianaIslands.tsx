interface Props {
  mp:string;
  MP:boolean;
  setCountrySelect:Function;
}

const NorthernMarianaIslands:React.FC<Props> = ({ mp, MP, setCountrySelect }) => {
  return (
    <g className={'northernMarianaIslands'} onMouseOver={() => setCountrySelect('northernMarianaIslands')}>
      <style jsx>{`
      .northernMarianaIslands {
        fill: ${mp};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mp" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mp)" />
    </defs>
    <circle fill={MP ? "url(#mp)" : null} r="5" cy="396" cx="1802" stroke="black"/>
    </g>
  )
}

export default NorthernMarianaIslands