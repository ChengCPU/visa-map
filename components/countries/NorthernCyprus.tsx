interface Props {
  rc:string;
  RC:boolean;
  setCountrySelect:Function;
}

const NorthernCyprus:React.FC<Props> = ({ rc, RC, setCountrySelect }) => {
  return (
    <g className={'northernCyprus'} onMouseOver={() => setCountrySelect('northernCyprus')}>
      <style jsx>{`
      .northernCyprus {
        fill: ${rc};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="rc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#rc)" />
    </defs>
    <circle fill={RC ? "url(#rc)" : null} r="3" cy="274.5" cx="1165" stroke="black"/>
    </g>
  )
}

export default NorthernCyprus