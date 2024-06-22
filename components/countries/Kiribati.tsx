interface Props {
  ki:string;
  KI:boolean;
  setCountrySelect:Function;
}

const Kiribati:React.FC<Props> = ({ ki, KI, setCountrySelect }) => {
  return (
    <g className={'kiribati'} onMouseOver={() => setCountrySelect('kiribati')}>
      <style jsx>{`
      .kiribati {
        fill: ${ki};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="ki" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#ki)" />
    </defs>
    <circle fill={KI && "url(#ki)"} r="5" cy="490" cx="1960" stroke="black"/>
    </g>
  )
}

export default Kiribati