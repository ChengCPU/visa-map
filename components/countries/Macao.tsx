interface Props {
  mo:string;
  MO:boolean;
  setCountrySelect:Function;
}

const Macao:React.FC<Props> = ({ mo, MO, setCountrySelect }) => {
  return (
    <g className={'macao'} onMouseOver={() => setCountrySelect('macao')}>
      <style jsx>{`
      .macao {
        fill: ${mo};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="mo" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mo)" />
    </defs>
    <circle fill={MO && "url(#mo)"} r="4" cy="360" cx="1614" stroke="black"/>
    </g>
  )
}

export default Macao