interface Props {
  ck:string;
  CK:boolean;
  setCountrySelect:Function;
}

const CookIslands:React.FC<Props> = ({ ck, CK, setCountrySelect }) => {
  return (
    <g className={'cookIslands'} onMouseOver={() => setCountrySelect('cookIslands')}>
      <style jsx>{`
      .cookIslands {
        fill: ${ck};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ck" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ck)" />
    </defs>
    <circle fill={CK ? "url(#ck)" : null} r="5" cy="631" cx="100" stroke="black"/>
    </g>
  )
}

export default CookIslands