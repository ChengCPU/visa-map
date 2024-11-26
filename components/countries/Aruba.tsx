interface Props {
  aw:string;
  AW:boolean;
  setCountrySelect:Function;
}

const Aruba:React.FC<Props> = ({ aw, AW, setCountrySelect }) => {
  return (
    <g className={'aruba'} onMouseOver={() => setCountrySelect('aruba')}>
      <style jsx>{`
      .aruba {
        fill: ${aw};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="aw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#aw)" />
    </defs>
    <circle fill={AW ? "url(#aw)" : null} r="2.5" cy="422" cx="590" stroke="black"/>
    </g>
  )
}

export default Aruba