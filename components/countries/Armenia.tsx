interface Props {
  am:string;
  AM:boolean;
  setCountrySelect:Function;
}

const Armenia:React.FC<Props> = ({ am, AM, setCountrySelect }) => {
  return (
    <g className={'armenia'} onMouseOver={() => setCountrySelect('armenia')}>
      <style jsx>{`
      .armenia {
        fill: ${am};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="am" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#am)" />
    </defs>
    <path fill={AM && "url(#am)"} d="M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z" stroke="black"/>
    </g>
  )
}
    
export default Armenia