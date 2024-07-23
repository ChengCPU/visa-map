interface Props {
  jj:string;
  JJ:boolean;
  setCountrySelect:Function;
}

const Jeju:React.FC<Props> = ({ jj, JJ, setCountrySelect }) => {
  return (
    <g className={'jeju'} onMouseOver={() => setCountrySelect('jeju')}>
      <style jsx>{`
      .jeju {
        fill: ${jj};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="jj" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#jj)" />
    </defs>
    <circle fill={JJ && "url(#jj)"} r="3.5" cy="290" cx="1667" stroke="black"/>
    </g>
  )
}

export default Jeju