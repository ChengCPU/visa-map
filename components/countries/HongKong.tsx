interface Props {
  hk:string;
  HK:boolean;
  setCountrySelect:Function;
}

const HongKong:React.FC<Props> = ({ hk, HK, setCountrySelect }) => {
  return (
    <g className={'hongKong'} onMouseOver={() => setCountrySelect('hongKong')}>
      <style jsx>{`
      .hongKong {
        fill: ${hk};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="hk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#hk)" />
    </defs>
    <circle fill={HK && "url(#hk)"} r="4" cy="358" cx="1622" stroke="black"/>
    </g>
  )
}

export default HongKong