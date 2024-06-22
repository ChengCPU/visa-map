interface Props {
  kx:string;
  KX:boolean;
  setCountrySelect:Function;
}

const Kurdistan:React.FC<Props> = ({ kx, KX, setCountrySelect }) => {
  return (
    <g className={'kurdistan'} onMouseOver={() => setCountrySelect('kurdistan')}>
      <style jsx>{`
      .kurdistan {
        fill: ${kx};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="kx" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kx)" />
    </defs>
    <circle fill={KX && "url(#kx)"} r="5" cy="262" cx="1220" stroke="black"/>
    </g>
  )
}

export default Kurdistan