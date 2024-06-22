interface Props {
  xb:string;
  XB:boolean;
  setCountrySelect:Function;
}

const Bonaire:React.FC<Props> = ({ xb, XB, setCountrySelect }) => {
  return (
    <g className={'bonaire'} onMouseOver={() => setCountrySelect('bonaire')}>
      <style jsx>{`
      .bonaire {
        fill: ${xb};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="xb" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#xb)" />
    </defs>
    <circle fill={XB && "url(#xb)"} r="2.5" cy="424" cx="606" stroke="black"/>
    </g>
  )
}

export default Bonaire