interface Props {
  tk:string;
  TK:boolean;
  setCountrySelect:Function;
}

const Tokelau:React.FC<Props> = ({ tk, TK, setCountrySelect }) => {
  return (
    <g className={'tokelau'} onMouseOver={() => setCountrySelect('tokelau')}>
      <style jsx>{`
      .tokelau {
        fill: ${tk};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="tk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#tk)" />
    </defs>
    <circle fill={TK && "url(#tk)"} r="5" cy="560" cx="25" stroke="black"/>
    </g>
  )
}

export default Tokelau